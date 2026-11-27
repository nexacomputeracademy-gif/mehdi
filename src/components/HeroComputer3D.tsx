import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { Layers, Maximize2, RotateCw } from 'lucide-react';
import { useAcademy } from '../context/AcademyContext';
import { buildRealisticPC } from '../three/pcModelBuilder';
import { detectSoftwareWebGL } from '../three/pcTextures';

export const HeroComputer3D: React.FC = () => {
  const { lang, navigate } = useAcademy();
  const mountRef = useRef<HTMLDivElement>(null);
  const [exploded, setExploded] = useState(false);
  const [contextLost, setContextLost] = useState(false);

  const explodedRef = useRef(exploded);
  explodedRef.current = exploded;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isSoftwareGl = detectSoftwareWebGL();
    const width = container.clientWidth || 560;
    const height = container.clientHeight || 460;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060c1c);
    scene.fog = new THREE.FogExp2(0x060c1c, 0.045);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(5.4, 2.3, 5.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
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

    // 3-point studio lighting
    const hemi = new THREE.HemisphereLight(0x7dd3fc, 0x0f172a, 0.75);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xfff1e6, 2.1);
    keyLight.position.set(6, 8, 6);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.bias = -0.0005;
    keyLight.shadow.normalBias = 0.02;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 1.5);
    rimLight.position.set(-6, 3, -5);
    scene.add(rimLight);

    const pc = buildRealisticPC(
      renderer.capabilities.getMaxAnisotropy(),
      isSoftwareGl
    );
    scene.add(pc.root);

    // Subtle circular platform ring
    const ringGeo = new THREE.RingGeometry(2.6, 2.66, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const platformRing = new THREE.Mesh(ringGeo, ringMat);
    platformRing.rotation.x = -Math.PI / 2;
    platformRing.position.y = -2.27;
    scene.add(platformRing);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.06;
    controls.enablePan = false;
    controls.minDistance = 4.2;
    controls.maxDistance = 10.5;
    controls.maxPolarAngle = Math.PI * 0.56;
    controls.autoRotate = !isSoftwareGl;
    controls.autoRotateSpeed = 0.9;
    controls.target.set(0, 0.05, 0);

    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    let frameId = 0;
    let currentExplode = 0;
    let lastTime = performance.now();
    const targetVec = new THREE.Vector3();

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

      const targetExplode = explodedRef.current ? 0.65 : 0;
      currentExplode = THREE.MathUtils.damp(currentExplode, targetExplode, 6, dt);

      // Slide glass open slightly so internal hardware shines
      const glassTargetX = 1.08 + currentExplode * 1.4;
      const glassTargetZ = currentExplode * 1.1;
      pc.glassPanelGroup.position.x = THREE.MathUtils.damp(
        pc.glassPanelGroup.position.x,
        glassTargetX,
        7,
        dt
      );
      pc.glassPanelGroup.position.z = THREE.MathUtils.damp(
        pc.glassPanelGroup.position.z,
        glassTargetZ,
        7,
        dt
      );

      for (const comp of Object.values(pc.components)) {
        const base = comp.userData.assembledPos as THREE.Vector3;
        const off = comp.userData.explodedOffset as THREE.Vector3;
        targetVec.copy(base).addScaledVector(off, currentExplode);
        comp.position.lerp(targetVec, 1 - Math.exp(-8 * dt));
      }

      // Spin fans gently
      for (const rotor of pc.fanRotors) {
        rotor.rotation.z += dt * 5.2;
      }

      controls.update();
      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    tick();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || 560;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('webglcontextlost', onLost);
      canvas.removeEventListener('webglcontextrestored', onRestored);
      controls.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      envTex.dispose();
      pc.dispose();
      renderer.dispose();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#060C1C] shadow-2xl">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {contextLost && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#060C1C] p-6 text-center">
          <img
            src="/src/assets/images/course_architecture_blueprint_1795787319183.jpg"
            alt="Computer hardware architecture"
            referrerPolicy="no-referrer"
            className="max-h-full rounded-xl object-cover opacity-80"
          />
        </div>
      )}

      {/* Clean non-occluding bottom action strip */}
      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 bg-[#070E20]/95 border border-cyan-500/20 rounded-xl px-3.5 py-2.5">
        <div className="flex items-center gap-2 text-xs text-slate-300 truncate">
          <RotateCw className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">
            {lang === 'ar'
              ? 'اسحب لتدوير الحاسوب 360°'
              : 'Drag to orbit 360° · Interactive 3D PC'}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setExploded((v) => !v)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              exploded
                ? 'bg-cyan-500 text-slate-950'
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? (exploded ? 'تجميع' : 'تفكيك') : (exploded ? 'Assemble' : 'Explode')}</span>
          </button>

          <button
            type="button"
            onClick={() => navigate({ view: 'lab' })}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'فتح المختبر' : 'Full Lab'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
