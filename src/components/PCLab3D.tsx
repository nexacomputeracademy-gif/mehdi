import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  DoorOpen,
  Eye,
  EyeOff,
  Layers,
  RotateCcw,
  Tag,
  Wrench,
  X,
} from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { PC_COMPONENTS } from '../data/pcComponents';
import { t, UI_STRINGS } from '../data/uiStrings';
import { buildRealisticPC, BuiltPCAssembly } from '../three/pcModelBuilder';
import { detectSoftwareWebGL } from '../three/pcTextures';
import { PCComponentId } from '../types/academy';

interface LabelScreenPos {
  id: PCComponentId;
  x: number;
  y: number;
  visible: boolean;
}

type LabMode = 'explore' | 'assemble';
type CameraPreset = 'iso' | 'inside' | 'front';

const PRESET_POSITIONS: Record<CameraPreset, { pos: [number, number, number]; target: [number, number, number] }> = {
  iso: { pos: [6.2, 2.5, 6.2], target: [0, 0, 0] },
  inside: { pos: [4.9, 0.7, 0.4], target: [-0.3, 0.25, -0.2] },
  front: { pos: [0.4, 0.8, 7.2], target: [0, 0, 0] },
};

const _projVec = new THREE.Vector3();
const _targetVec = new THREE.Vector3();

export const PCLab3D: React.FC<{ initialComponent?: PCComponentId }> = ({
  initialComponent,
}) => {
  const { lang, navigate } = useAcademy();
  const containerRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<LabMode>('explore');
  const [explodeFactor, setExplodeFactor] = useState(0); // 0 to 1
  const [caseOpen, setCaseOpen] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [hudHidden, setHudHidden] = useState(false);
  const [selectedId, setSelectedId] = useState<PCComponentId | null>(initialComponent ?? 'gpu');
  const [hoveredId, setHoveredId] = useState<PCComponentId | null>(null);
  const [installedParts, setInstalledParts] = useState<PCComponentId[]>(['case']);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [labelPositions, setLabelPositions] = useState<LabelScreenPos[]>([]);
  const [contextLost, setContextLost] = useState(false);

  // Refs synced into Three.js animation loop so React UI updates never tear down WebGL
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const explodeRef = useRef(explodeFactor);
  explodeRef.current = explodeFactor;
  const caseOpenRef = useRef(caseOpen);
  caseOpenRef.current = caseOpen;
  const showLabelsRef = useRef(showLabels);
  showLabelsRef.current = showLabels;
  const selectedRef = useRef(selectedId);
  selectedRef.current = selectedId;
  const hoveredRef = useRef(hoveredId);
  hoveredRef.current = hoveredId;
  const installedRef = useRef(installedParts);
  installedRef.current = installedParts;

  const cameraTargetTransition = useRef<{
    pos: THREE.Vector3;
    target: THREE.Vector3;
    active: boolean;
  }>({
    pos: new THREE.Vector3(...PRESET_POSITIONS.iso.pos),
    target: new THREE.Vector3(...PRESET_POSITIONS.iso.target),
    active: false,
  });

  const orderedAssembly = [...PC_COMPONENTS].sort((a, b) => a.order - b.order);
  const nextStepPart = orderedAssembly.find((p) => !installedParts.includes(p.id)) ?? null;

  const applyCameraPreset = (preset: CameraPreset) => {
    const cfg = PRESET_POSITIONS[preset];
    cameraTargetTransition.current.pos.set(...cfg.pos);
    cameraTargetTransition.current.target.set(...cfg.target);
    cameraTargetTransition.current.active = true;
  };

  useEffect(() => {
    if (initialComponent) {
      setSelectedId(initialComponent);
      setCaseOpen(true);
      setDrawerOpen(true);
    }
  }, [initialComponent]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isSoftwareGl = detectSoftwareWebGL();
    const width = container.clientWidth || 1000;
    const height = container.clientHeight || 640;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050a17);
    scene.fog = new THREE.FogExp2(0x050a17, 0.032);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(...PRESET_POSITIONS.iso.pos);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const onLost = (e: Event) => {
      e.preventDefault();
      setContextLost(true);
    };
    const onRestored = () => setContextLost(false);
    canvas.addEventListener('webglcontextlost', onLost);
    canvas.addEventListener('webglcontextrestored', onRestored);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = envTex;
    pmrem.dispose();

    // 3-Point Studio Lighting
    const hemi = new THREE.HemisphereLight(0x93c5fd, 0x0b1326, 0.8);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xfff5eb, 2.2);
    keyLight.position.set(7, 9, 7);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 1.65);
    rimLight.position.set(-7, 4, -6);
    scene.add(rimLight);

    // Subtle workbench grid floor
    const grid = new THREE.GridHelper(18, 36, 0x0284c7, 0x0f1e3a);
    grid.position.y = -2.29;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.45;
    scene.add(grid);

    const pc: BuiltPCAssembly = buildRealisticPC(
      renderer.capabilities.getMaxAnisotropy(),
      isSoftwareGl
    );
    scene.add(pc.root);

    // Clone emissive tracking per component so selection/hover glow never corrupts shared materials
    const originalMaterials = new Map<THREE.Mesh, THREE.Material>();
    pc.root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.isMesh && mesh.material && !Array.isArray(mesh.material)) {
        const cloned = mesh.material.clone();
        originalMaterials.set(mesh, cloned);
        mesh.material = cloned;
      }
    });

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.06;
    controls.minDistance = 3.2;
    controls.maxDistance = 13.5;
    controls.maxPolarAngle = Math.PI * 0.62;
    controls.target.set(0, 0, 0);

    controls.addEventListener('start', () => {
      cameraTargetTransition.current.active = false;
    });

    // Raycasting for component hover & click selection
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };
    let lastHoverCheck = 0;

    const getHitComponent = (clientX: number, clientY: number): PCComponentId | null => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);

      const targets = Object.values(pc.components).filter((g) => g.visible);
      const hits = raycaster.intersectObjects(targets, true);
      for (const hit of hits) {
        const compId = hit.object.userData.componentId as PCComponentId | undefined;
        // If case is closed and user clicks glass, select case unless exploded; if open, allow clicking inside!
        if (compId) return compId;
      }
      return null;
    };

    const onPointerDown = (e: PointerEvent) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = (e: PointerEvent) => {
      const dx = e.clientX - pointerDownPos.x;
      const dy = e.clientY - pointerDownPos.y;
      if (Math.hypot(dx, dy) > 6) return; // Was dragging to orbit
      const hit = getHitComponent(e.clientX, e.clientY);
      if (hit) {
        setSelectedId(hit);
        setDrawerOpen(true);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - lastHoverCheck < 50) return;
      lastHoverCheck = now;
      const hit = getHitComponent(e.clientX, e.clientY);
      setHoveredId(hit);
      canvas.style.cursor = hit ? 'pointer' : 'grab';
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointermove', onPointerMove);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    let frameId = 0;
    let currentExplode = 0;
    let currentCaseOpen = 1;
    let lastTime = performance.now();
    let labelTick = 0;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // 1. Smoothly damp Exploded View & Open Case Glass Panel
      const targetExplode = modeRef.current === 'explore' ? explodeRef.current : 0;
      currentExplode = THREE.MathUtils.damp(currentExplode, targetExplode, 7, dt);

      const targetGlassOpen = caseOpenRef.current || currentExplode > 0.08 ? 1 : 0;
      currentCaseOpen = THREE.MathUtils.damp(currentCaseOpen, targetGlassOpen, 7, dt);

      pc.glassPanelGroup.position.x = 1.08 + currentCaseOpen * 1.6 + currentExplode * 0.9;
      pc.glassPanelGroup.position.z = currentCaseOpen * 1.45 + currentExplode * 0.7;
      pc.glassPanelGroup.rotation.y = currentCaseOpen * 0.38;
      pc.glassPanelGroup.visible = currentCaseOpen < 0.96 || modeRef.current === 'explore';

      // 2. Visibility + Position Interpolation per component
      const inAssemble = modeRef.current === 'assemble';
      const installed = installedRef.current;

      for (const [id, group] of Object.entries(pc.components) as [PCComponentId, THREE.Group][]) {
        const isInstalled = !inAssemble || installed.includes(id);
        group.visible = isInstalled;

        const base = group.userData.assembledPos as THREE.Vector3;
        const off = group.userData.explodedOffset as THREE.Vector3;
        if (isInstalled) {
          _targetVec.copy(base).addScaledVector(off, currentExplode);
          group.position.lerp(_targetVec, 1 - Math.exp(-9 * dt));
        } else {
          // Keep uninstalled parts offset outward so installing slides them cleanly into place
          _targetVec.copy(base).addScaledVector(off, 1.25);
          group.position.copy(_targetVec);
        }

        // Highlight selected or hovered component cleanly
        const isSelected = selectedRef.current === id;
        const isHovered = hoveredRef.current === id;
        group.traverse((child) => {
          const mesh = child as THREE.Mesh;
          if (mesh.isMesh && mesh.material instanceof THREE.MeshStandardMaterial) {
            if (!mesh.userData.baseEmissive) {
              mesh.userData.baseEmissive = mesh.material.emissive.getHex();
              mesh.userData.baseEmissiveInt = mesh.material.emissiveIntensity;
            }
            if (isSelected) {
              mesh.material.emissive.setHex(0x0ea5e9);
              mesh.material.emissiveIntensity = Math.max(mesh.userData.baseEmissiveInt, 0.55);
            } else if (isHovered) {
              mesh.material.emissive.setHex(0x38bdf8);
              mesh.material.emissiveIntensity = Math.max(mesh.userData.baseEmissiveInt, 0.25);
            } else {
              mesh.material.emissive.setHex(mesh.userData.baseEmissive);
              mesh.material.emissiveIntensity = mesh.userData.baseEmissiveInt;
            }
          }
        });
      }

      // 3. Spin cooling fans
      const fansPowered = !inAssemble || (installed.includes('psu') && installed.includes('fans'));
      if (fansPowered) {
        for (const rotor of pc.fanRotors) {
          rotor.rotation.z += dt * 6.5;
        }
      }

      // 4. Camera preset transition
      if (cameraTargetTransition.current.active) {
        camera.position.lerp(cameraTargetTransition.current.pos, 1 - Math.exp(-6 * dt));
        controls.target.lerp(cameraTargetTransition.current.target, 1 - Math.exp(-6 * dt));
        if (camera.position.distanceTo(cameraTargetTransition.current.pos) < 0.04) {
          cameraTargetTransition.current.active = false;
        }
      }

      controls.update();
      renderer.render(scene, camera);

      // 5. Project 3D component anchors to 2D DOM labels (~15fps throttle to save React renders)
      labelTick++;
      if (showLabelsRef.current && labelTick % 3 === 0) {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const nextLabels: LabelScreenPos[] = [];
        for (const [id, group] of Object.entries(pc.components) as [PCComponentId, THREE.Group][]) {
          if (!group.visible) {
            nextLabels.push({ id, x: 0, y: 0, visible: false });
            continue;
          }
          const anchor = group.userData.labelAnchor as THREE.Vector3;
          _projVec.copy(group.position).add(anchor);
          _projVec.project(camera);
          const isFront = _projVec.z < 1 && _projVec.z > -1;
          const sx = ((_projVec.x + 1) / 2) * w;
          const sy = ((-_projVec.y + 1) / 2) * h;
          const inBounds = sx > 40 && sx < w - 40 && sy > 40 && sy < h - 80;
          nextLabels.push({ id, x: sx, y: sy, visible: isFront && inBounds });
        }
        setLabelPositions(nextLabels);
      }

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 1000;
      const h = container.clientHeight || 640;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      controls.dispose();
      grid.geometry.dispose();
      (grid.material as THREE.Material).dispose();
      envTex.dispose();
      pc.dispose();
      renderer.dispose();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  const selectedSpec = selectedId
    ? PC_COMPONENTS.find((c) => c.id === selectedId) ?? null
    : null;

  const handleInstallPart = (partId: PCComponentId) => {
    setInstalledParts((prev) => (prev.includes(partId) ? prev : [...prev, partId]));
    setSelectedId(partId);
  };

  const handleResetAssembly = () => {
    setInstalledParts(['case']);
    setSelectedId('case');
  };

  return (
    <div className="relative w-full h-[calc(100vh-76px)] min-h-[620px] bg-[#050A17] overflow-hidden select-none">
      {/* 1. Dedicated Three.js Canvas Mount */}
      <div ref={containerRef} className="w-full h-full" />

      {contextLost && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#050A17] p-8 z-30">
          <div className="max-w-lg text-center space-y-4">
            <img
              src="/src/assets/images/course_architecture_blueprint_1795787319183.jpg"
              alt="Hardware Architecture"
              referrerPolicy="no-referrer"
              className="rounded-xl border border-cyan-500/20"
            />
            <p className="text-sm text-slate-300">
              {lang === 'ar'
                ? 'تم تعليق سياق WebGL مؤقتاً. أعد تحميل الصفحة لاستئناف العرض ثلاثي الأبعاد.'
                : 'WebGL context paused. Reload to resume interactive 3D hardware rendering.'}
            </p>
          </div>
        </div>
      )}

      {/* 2. Projected 3D Component Callout Labels */}
      {showLabels && !hudHidden && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {labelPositions.map((lp) => {
            if (!lp.visible) return null;
            const spec = PC_COMPONENTS.find((c) => c.id === lp.id);
            if (!spec) return null;
            const isSel = selectedId === lp.id;
            return (
              <button
                key={lp.id}
                type="button"
                onClick={() => {
                  setSelectedId(lp.id);
                  setDrawerOpen(true);
                }}
                style={{
                  transform: `translate(${lp.x}px, ${lp.y}px) translate(-50%, -50%)`,
                }}
                className={`pointer-events-auto absolute top-0 left-0 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors whitespace-nowrap border ${
                  isSel
                    ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-lg'
                    : 'bg-[#091226]/90 text-slate-200 border-cyan-500/30 hover:border-cyan-400'
                }`}
              >
                {t(spec.shortName, lang)}
              </button>
            );
          })}
        </div>
      )}

      {/* 3. Minimal Top-Left Header Indicator */}
      <div className="absolute top-4 start-4 z-20 flex items-center gap-3 bg-[#091226]/95 border border-cyan-500/20 rounded-xl px-4 py-2.5">
        <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
        <div>
          <h1 className="text-sm font-bold text-white leading-tight">
            {t(UI_STRINGS.lab.title, lang)}
          </h1>
          <p className="text-[11px] text-slate-400">
            {t(UI_STRINGS.lab.subtitle, lang)}
          </p>
        </div>
      </div>

      {/* 4. Top-Right Toggleable Component Inspector Drawer (non-intrusive, closable) */}
      {!hudHidden && (
        <div className="absolute top-4 end-4 z-20 w-[300px] sm:w-[340px] max-h-[calc(100%-140px)] flex flex-col bg-[#091226]/95 border border-cyan-500/25 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
            <span className="text-xs font-semibold text-cyan-400">
              {mode === 'assemble'
                ? `${t(UI_STRINGS.lab.assembleMode, lang)} (${installedParts.length}/10)`
                : selectedSpec
                ? t(selectedSpec.shortName, lang)
                : t(UI_STRINGS.lab.componentsList, lang)}
            </span>
            <button
              type="button"
              onClick={() => setDrawerOpen((o) => !o)}
              aria-label="Toggle Inspector"
              className="p-1 text-slate-400 hover:text-white rounded-md"
            >
              {drawerOpen ? <X className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {drawerOpen && (
            <div className="p-4 overflow-y-auto space-y-4 text-sm">
              {mode === 'assemble' ? (
                <div className="space-y-3">
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-cyan-400 h-full transition-all duration-300"
                      style={{ width: `${(installedParts.length / 10) * 100}%` }}
                    />
                  </div>

                  {nextStepPart ? (
                    <div className="p-3 rounded-lg bg-blue-950/50 border border-cyan-500/30 space-y-2">
                      <p className="text-xs text-cyan-300 font-medium">
                        {lang === 'ar'
                          ? `الخطوة التالية (${nextStepPart.order}/10):`
                          : `Next Step (${nextStepPart.order}/10):`}
                      </p>
                      <p className="font-semibold text-white">
                        {t(nextStepPart.name, lang)}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {t(nextStepPart.role, lang)}
                      </p>
                      <button
                        type="button"
                        onClick={() => handleInstallPart(nextStepPart.id)}
                        className="w-full py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
                      >
                        {t(UI_STRINGS.lab.installNext, lang)}
                      </button>
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 space-y-2">
                      <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{t(UI_STRINGS.lab.assemblyComplete, lang)}</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    {orderedAssembly.map((part) => {
                      const done = installedParts.includes(part.id);
                      const isNext = nextStepPart?.id === part.id;
                      return (
                        <button
                          key={part.id}
                          type="button"
                          onClick={() => {
                            if (done) {
                              setSelectedId(part.id);
                            } else if (isNext) {
                              handleInstallPart(part.id);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs border transition-colors ${
                            done
                              ? 'bg-slate-900/80 border-slate-700 text-slate-200'
                              : isNext
                              ? 'bg-cyan-950/50 border-cyan-500/50 text-cyan-200'
                              : 'bg-slate-900/30 border-slate-800/70 text-slate-500'
                          }`}
                        >
                          <span className="truncate">
                            {part.order}. {t(part.shortName, lang)}
                          </span>
                          <span className="text-[11px] font-mono shrink-0">
                            {done
                              ? lang === 'ar'
                                ? 'مثبّت'
                                : 'Installed'
                              : isNext
                              ? lang === 'ar'
                                ? 'ركّب الآن'
                                : 'Install'
                              : '—'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={handleResetAssembly}
                    className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t(UI_STRINGS.lab.resetBuild, lang)}</span>
                  </button>
                </div>
              ) : selectedSpec ? (
                <div className="space-y-3.5">
                  <div>
                    <h2 className="text-base font-bold text-white">
                      {t(selectedSpec.name, lang)}
                    </h2>
                    <p className="text-xs text-cyan-400 mt-0.5">
                      {t(selectedSpec.role, lang)}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t(selectedSpec.description, lang)}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {selectedSpec.specs.map((sp, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg bg-slate-900/90 border border-slate-800"
                      >
                        <div className="text-[10px] text-slate-400">
                          {t(sp.label, lang)}
                        </div>
                        <div className="text-xs font-mono text-slate-100 mt-0.5 truncate">
                          {sp.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-1 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        navigate({ view: 'lesson', lessonId: selectedSpec.relatedLessonId })
                      }
                      className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{t(UI_STRINGS.lab.openRelatedLesson, lang)}</span>
                    </button>
                  </div>

                  {/* Quick component switcher */}
                  <div className="pt-2 border-t border-slate-800">
                    <div className="text-[11px] text-slate-400 mb-2">
                      {t(UI_STRINGS.lab.componentsList, lang)}
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {PC_COMPONENTS.map((comp) => (
                        <button
                          key={comp.id}
                          type="button"
                          onClick={() => setSelectedId(comp.id)}
                          className={`px-2.5 py-1.5 rounded-md text-[11px] text-start truncate transition-colors ${
                            selectedId === comp.id
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-semibold'
                              : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 border border-transparent'
                          }`}
                        >
                          {t(comp.shortName, lang)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-400">
                  {t(UI_STRINGS.lab.selectPrompt, lang)}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* 5. Collapsible Bottom Control Dock (Zero Viewport Occlusion) */}
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-20 transition-transform duration-300 max-w-[94vw] ${
          hudHidden ? 'translate-y-[calc(100%-36px)]' : 'translate-y-0'
        }`}
      >
        <div className="flex justify-center mb-1.5">
          <button
            type="button"
            onClick={() => setHudHidden((h) => !h)}
            className="px-3 py-1 rounded-t-lg bg-[#091226]/95 border border-b-0 border-cyan-500/25 text-[11px] text-slate-300 hover:text-white flex items-center gap-1.5"
          >
            {hudHidden ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t(UI_STRINGS.lab.showHud, lang)}</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t(UI_STRINGS.lab.hideHud, lang)}</span>
              </>
            )}
          </button>
        </div>

        <div className="bg-[#091226]/95 border border-cyan-500/25 rounded-2xl px-4 py-3 shadow-2xl flex flex-wrap items-center justify-center gap-3">
          {/* Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-900 rounded-lg border border-slate-800">
            <button
              type="button"
              onClick={() => setMode('explore')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                mode === 'explore'
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{t(UI_STRINGS.lab.exploreMode, lang)}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('assemble');
                setCaseOpen(true);
                setDrawerOpen(true);
              }}
              className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                mode === 'assemble'
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>{t(UI_STRINGS.lab.assembleMode, lang)}</span>
            </button>
          </div>

          {/* Exploded View Slider (Explore Mode) */}
          {mode === 'explore' && (
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <label
                htmlFor="explode-slider"
                className="text-xs text-slate-300 whitespace-nowrap"
              >
                {t(UI_STRINGS.lab.explodedView, lang)}
              </label>
              <input
                id="explode-slider"
                type="range"
                min={0}
                max={100}
                value={Math.round(explodeFactor * 100)}
                onChange={(e) => setExplodeFactor(Number(e.target.value) / 100)}
                className="w-24 sm:w-32 accent-cyan-400 cursor-pointer"
              />
              <span className="text-[11px] font-mono text-cyan-300 w-9 text-end tabular-nums">
                {Math.round(explodeFactor * 100)}%
              </span>
            </div>
          )}

          {/* Open Case Toggle */}
          <button
            type="button"
            onClick={() => setCaseOpen((o) => !o)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              caseOpen
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <DoorOpen className="w-3.5 h-3.5" />
            <span>
              {caseOpen
                ? t(UI_STRINGS.lab.openCase, lang)
                : t(UI_STRINGS.lab.closeCase, lang)}
            </span>
          </button>

          {/* Labels Toggle */}
          <button
            type="button"
            onClick={() => setShowLabels((l) => !l)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 whitespace-nowrap transition-colors ${
              showLabels
                ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            {showLabels ? <Tag className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>
              {showLabels
                ? t(UI_STRINGS.lab.labelsOn, lang)
                : t(UI_STRINGS.lab.labelsOff, lang)}
            </span>
          </button>

          {/* Camera Presets */}
          <div className="flex items-center gap-1">
            {(['iso', 'inside', 'front'] as CameraPreset[]).map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => applyCameraPreset(preset)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] font-medium text-slate-300 hover:text-white whitespace-nowrap transition-colors"
              >
                {preset === 'iso'
                  ? lang === 'ar'
                    ? 'إعادة'
                    : 'Reset'
                  : preset === 'inside'
                  ? lang === 'ar'
                    ? 'الداخل'
                    : 'Inside'
                  : lang === 'ar'
                  ? 'أمامي'
                  : 'Front'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
