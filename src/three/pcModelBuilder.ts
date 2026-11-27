import * as THREE from 'three';
import { PCComponentId } from '../types/academy';
import {
  createContactShadowTexture,
  createCpuLabelTexture,
  createDriveLabelTexture,
  createMotherboardTexture,
} from './pcTextures';

export interface BuiltPCAssembly {
  root: THREE.Group;
  components: Record<PCComponentId, THREE.Group>;
  glassPanelGroup: THREE.Group;
  fanRotors: THREE.Object3D[];
  dispose: () => void;
}

function tagComponent(group: THREE.Object3D, id: PCComponentId) {
  group.userData.componentId = id;
  group.traverse((child) => {
    child.userData.componentId = id;
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

function createFanAssembly(
  diameter: number,
  depth: number,
  frameMat: THREE.Material,
  bladeMat: THREE.Material,
  ringMat: THREE.Material
): { group: THREE.Group; rotor: THREE.Group } {
  const group = new THREE.Group();
  const half = diameter / 2;

  // Outer square chamfered frame
  const outerShape = new THREE.Shape();
  const r = 0.08;
  outerShape.moveTo(-half + r, -half);
  outerShape.lineTo(half - r, -half);
  outerShape.quadraticCurveTo(half, -half, half, -half + r);
  outerShape.lineTo(half, half - r);
  outerShape.quadraticCurveTo(half, half, half - r, half);
  outerShape.lineTo(-half + r, half);
  outerShape.quadraticCurveTo(-half, half, -half, half - r);
  outerShape.lineTo(-half, -half + r);
  outerShape.quadraticCurveTo(-half, -half, -half + r, -half);

  const hole = new THREE.Path();
  hole.absarc(0, 0, half * 0.86, 0, Math.PI * 2, true);
  outerShape.holes.push(hole);

  const frameGeo = new THREE.ExtrudeGeometry(outerShape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.015,
    bevelSegments: 2,
  });
  frameGeo.center();
  const frameMesh = new THREE.Mesh(frameGeo, frameMat);
  group.add(frameMesh);

  // Cyan LED accent ring
  const ringGeo = new THREE.TorusGeometry(half * 0.85, 0.016, 10, 36);
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.position.z = depth * 0.42;
  group.add(ringMesh);

  // Rotor hub + 7 swept blades
  const rotor = new THREE.Group();
  const hubGeo = new THREE.CylinderGeometry(half * 0.25, half * 0.25, depth * 0.72, 20);
  hubGeo.rotateX(Math.PI / 2);
  const hubMesh = new THREE.Mesh(hubGeo, frameMat);
  rotor.add(hubMesh);

  const bladeGeo = new THREE.BoxGeometry(half * 0.56, half * 0.19, 0.018);
  const bladeCount = 7;
  for (let i = 0; i < bladeCount; i++) {
    const angle = (i / bladeCount) * Math.PI * 2;
    const pivot = new THREE.Group();
    pivot.rotation.z = angle;
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.x = half * 0.52;
    blade.rotation.x = 0.48;
    pivot.add(blade);
    rotor.add(pivot);
  }

  group.add(rotor);
  return { group, rotor };
}

export function buildRealisticPC(
  maxAnisotropy: number,
  isSoftwareGl: boolean
): BuiltPCAssembly {
  const root = new THREE.Group();
  const fanRotors: THREE.Object3D[] = [];
  const textures: THREE.Texture[] = [];

  // Shared calibrated PBR Materials
  const caseSteelMat = new THREE.MeshStandardMaterial({
    color: 0x131c2e,
    roughness: 0.62,
    metalness: 0.55,
  });
  const caseTrimMat = new THREE.MeshStandardMaterial({
    color: 0x1e293b,
    roughness: 0.42,
    metalness: 0.75,
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xbfe9ff,
    roughness: 0.08,
    metalness: 0.05,
    transmission: isSoftwareGl ? 0 : 0.84,
    transparent: true,
    opacity: isSoftwareGl ? 0.26 : 0.42,
    ior: 1.5,
    thickness: 0.06,
    depthWrite: false,
  });
  const cyanEmissiveMat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    emissive: 0x22d3ee,
    emissiveIntensity: 1.4,
    roughness: 0.25,
    metalness: 0.2,
  });
  const aluminumMat = new THREE.MeshStandardMaterial({
    color: 0xcbd5e1,
    roughness: 0.28,
    metalness: 0.88,
  });
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    roughness: 0.35,
    metalness: 0.82,
  });
  const copperMat = new THREE.MeshStandardMaterial({
    color: 0xd97736,
    roughness: 0.24,
    metalness: 0.92,
  });
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xeab308,
    roughness: 0.22,
    metalness: 0.94,
  });
  const blackPlasticMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.72,
    metalness: 0.1,
  });
  const cableMat = new THREE.MeshStandardMaterial({
    color: 0x1d4ed8,
    roughness: 0.65,
    metalness: 0.15,
  });

  // Ground Contact Shadow Plane
  const shadowTex = createContactShadowTexture();
  textures.push(shadowTex);
  const shadowPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(6.8, 6.8),
    new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.65,
    })
  );
  shadowPlane.rotation.x = -Math.PI / 2;
  shadowPlane.position.y = -2.28;
  root.add(shadowPlane);

  // =========================================================================
  // 1. PC CASE (Mid-Tower ATX Chassis + Hinged/Sliding Tempered Glass)
  // =========================================================================
  const caseGroup = new THREE.Group();
  caseGroup.userData.assembledPos = new THREE.Vector3(0, 0, 0);
  caseGroup.userData.explodedOffset = new THREE.Vector3(-0.35, 0, 0);
  caseGroup.userData.labelAnchor = new THREE.Vector3(0, 2.25, 0.8);

  // Case dimensions: width X=2.2, height Y=4.4, depth Z=4.2
  // Back spine tray (behind motherboard at X = -0.78)
  const backTray = new THREE.Mesh(new THREE.BoxGeometry(0.08, 4.3, 4.1), caseSteelMat);
  backTray.position.set(-0.82, 0, 0);
  caseGroup.add(backTray);

  // Right solid steel side panel (X = -1.08)
  const rightPanel = new THREE.Mesh(new THREE.BoxGeometry(0.06, 4.36, 4.18), caseSteelMat);
  rightPanel.position.set(-1.08, 0, 0);
  caseGroup.add(rightPanel);

  // Bottom floor + 4 machined rubberized feet
  const bottomPlate = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.08, 4.2), caseSteelMat);
  bottomPlate.position.set(0, -2.14, 0);
  caseGroup.add(bottomPlate);

  const footGeo = new THREE.CylinderGeometry(0.16, 0.18, 0.12, 20);
  const footCoords = [
    [-0.82, -2.22, 1.75],
    [0.82, -2.22, 1.75],
    [-0.82, -2.22, -1.75],
    [0.82, -2.22, -1.75],
  ];
  for (const [fx, fy, fz] of footCoords) {
    const foot = new THREE.Mesh(footGeo, caseTrimMat);
    foot.position.set(fx, fy, fz);
    caseGroup.add(foot);
  }

  // Top frame + perforated magnetic dust filter + front I/O buttons
  const topPlate = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.08, 4.2), caseSteelMat);
  topPlate.position.set(0, 2.16, 0);
  caseGroup.add(topPlate);

  const topMeshFilter = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.025, 2.9), caseTrimMat);
  topMeshFilter.position.set(0.05, 2.21, -0.2);
  caseGroup.add(topMeshFilter);

  const powerBtn = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.03, 16), cyanEmissiveMat);
  powerBtn.position.set(0.55, 2.21, 1.82);
  caseGroup.add(powerBtn);

  // Rear exhaust frame & PCIe bracket bay (Z = -2.06)
  const rearWall = new THREE.Mesh(new THREE.BoxGeometry(2.16, 4.28, 0.08), caseSteelMat);
  rearWall.position.set(0, 0, -2.06);
  caseGroup.add(rearWall);

  // PSU Shroud separating bottom chamber
  const psuShroud = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.06, 3.15), caseTrimMat);
  psuShroud.position.set(0.12, -1.12, -0.5);
  caseGroup.add(psuShroud);

  const shroudFront = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.98, 0.06), caseTrimMat);
  shroudFront.position.set(0.12, -1.61, 1.05);
  caseGroup.add(shroudFront);

  // Front perforated mesh frame (Z = +2.06) with vertical accent strip
  const frontBezelLeft = new THREE.Mesh(new THREE.BoxGeometry(0.18, 4.3, 0.14), caseTrimMat);
  frontBezelLeft.position.set(-0.99, 0, 2.05);
  caseGroup.add(frontBezelLeft);

  const frontBezelRight = new THREE.Mesh(new THREE.BoxGeometry(0.18, 4.3, 0.14), caseTrimMat);
  frontBezelRight.position.set(0.99, 0, 2.05);
  caseGroup.add(frontBezelRight);

  const frontMeshSlats = new THREE.Group();
  for (let i = 0; i < 16; i++) {
    const slat = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.05, 0.06), caseTrimMat);
    slat.position.set(0, -1.75 + i * 0.23, 2.06);
    frontMeshSlats.add(slat);
  }
  caseGroup.add(frontMeshSlats);

  const frontLedBar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 3.8, 0.04), cyanEmissiveMat);
  frontLedBar.position.set(0.92, 0, 2.12);
  caseGroup.add(frontLedBar);

  // Tempered glass panel (separately animatable for Open Case View!)
  const glassPanelGroup = new THREE.Group();
  glassPanelGroup.position.set(1.08, 0, 0);
  const glassSheet = new THREE.Mesh(new THREE.BoxGeometry(0.04, 4.18, 4.04), glassMat);
  glassSheet.renderOrder = 10;
  glassPanelGroup.add(glassSheet);

  // Steel border trim around glass
  const glassFrameTop = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 4.06), caseTrimMat);
  glassFrameTop.position.y = 2.06;
  glassPanelGroup.add(glassFrameTop);
  const glassFrameBot = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 4.06), caseTrimMat);
  glassFrameBot.position.y = -2.06;
  glassPanelGroup.add(glassFrameBot);

  caseGroup.add(glassPanelGroup);
  tagComponent(caseGroup, 'case');
  root.add(caseGroup);

  // =========================================================================
  // 2. MOTHERBOARD (ATX Z790 PCB + VRM Heatsinks + Socket + DIMM + PCIe)
  // =========================================================================
  const moboGroup = new THREE.Group();
  moboGroup.position.set(-0.68, 0.45, -0.32);
  moboGroup.userData.assembledPos = moboGroup.position.clone();
  moboGroup.userData.explodedOffset = new THREE.Vector3(0.45, 0.1, 0);
  moboGroup.userData.labelAnchor = new THREE.Vector3(0.15, 1.25, 0.7);

  const moboTex = createMotherboardTexture(maxAnisotropy);
  textures.push(moboTex);
  const moboBoardMat = new THREE.MeshStandardMaterial({
    map: moboTex,
    roughness: 0.48,
    metalness: 0.2,
  });

  // Main ATX board (X thickness 0.06, Y=2.85, Z=2.35)
  const pcb = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.85, 2.35), moboBoardMat);
  moboGroup.add(pcb);

  // Rear I/O aluminum shroud & VRM heatsink blocks
  const ioShroud = new THREE.Mesh(new THREE.BoxGeometry(0.38, 1.05, 0.46), darkMetalMat);
  ioShroud.position.set(0.21, 0.68, -0.92);
  moboGroup.add(ioShroud);

  const ioAccent = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.78, 0.06), cyanEmissiveMat);
  ioAccent.position.set(0.41, 0.68, -0.82);
  moboGroup.add(ioAccent);

  const topVrm = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.24, 0.95), darkMetalMat);
  topVrm.position.set(0.15, 1.15, -0.18);
  moboGroup.add(topVrm);

  // LGA CPU Socket retention frame
  const socketBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.68, 0.68), aluminumMat);
  socketBase.position.set(0.06, 0.45, -0.15);
  moboGroup.add(socketBase);

  // 4 DDR5 DIMM slots
  for (let i = 0; i < 4; i++) {
    const slot = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.98, 0.055), blackPlasticMat);
    slot.position.set(0.07, 0.45, 0.46 + i * 0.11);
    moboGroup.add(slot);
  }

  // Reinforced steel PCIe x16 Slot
  const pcieSlot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.09, 1.1), aluminumMat);
  pcieSlot.position.set(0.08, -0.45, -0.22);
  moboGroup.add(pcieSlot);

  // Secondary PCIe x4 slot
  const pcieSlot2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.68), blackPlasticMat);
  pcieSlot2.position.set(0.07, -0.88, -0.4);
  moboGroup.add(pcieSlot2);

  // Chipset PCH heatsink + CMOS CR2032 battery
  const pchHeatsink = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.62, 0.72), darkMetalMat);
  pchHeatsink.position.set(0.09, -0.82, 0.56);
  moboGroup.add(pchHeatsink);

  const cmosBattery = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.12, 0.04, 24),
    aluminumMat
  );
  cmosBattery.rotation.z = Math.PI / 2;
  cmosBattery.position.set(0.05, -0.66, -0.05);
  moboGroup.add(cmosBattery);

  // 24-pin ATX power header
  const atxHeader = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.45, 0.12), blackPlasticMat);
  atxHeader.position.set(0.1, 0.35, 1.05);
  moboGroup.add(atxHeader);

  tagComponent(moboGroup, 'motherboard');
  root.add(moboGroup);

  // =========================================================================
  // 3. CPU (Substrate + Gold Contact Array + Laser-Etched IHS)
  // =========================================================================
  const cpuGroup = new THREE.Group();
  cpuGroup.position.set(-0.56, 0.9, -0.47);
  cpuGroup.userData.assembledPos = cpuGroup.position.clone();
  cpuGroup.userData.explodedOffset = new THREE.Vector3(1.15, 0.45, -0.25);
  cpuGroup.userData.labelAnchor = new THREE.Vector3(0.15, 0.35, 0);

  const cpuSubstrate = new THREE.Mesh(
    new THREE.BoxGeometry(0.035, 0.54, 0.54),
    new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.45, metalness: 0.25 })
  );
  cpuGroup.add(cpuSubstrate);

  // Gold contact pad backing
  const cpuGoldPads = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.48, 0.48), goldMat);
  cpuGoldPads.position.x = -0.02;
  cpuGroup.add(cpuGoldPads);

  // IHS Nickel-Plated Copper Lid
  const cpuLabelTex = createCpuLabelTexture(maxAnisotropy);
  textures.push(cpuLabelTex);
  const cpuIhsMat = new THREE.MeshStandardMaterial({
    map: cpuLabelTex,
    roughness: 0.26,
    metalness: 0.85,
  });
  const cpuIhs = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.44, 0.44), cpuIhsMat);
  cpuIhs.position.x = 0.038;
  cpuGroup.add(cpuIhs);

  tagComponent(cpuGroup, 'cpu');
  root.add(cpuGroup);

  // =========================================================================
  // 4. CPU COOLER (Copper Cold Plate + 4 U-Bend Heatpipes + Fin Stack + PWM Fan)
  // =========================================================================
  const coolerGroup = new THREE.Group();
  coolerGroup.position.set(-0.08, 0.9, -0.47);
  coolerGroup.userData.assembledPos = coolerGroup.position.clone();
  coolerGroup.userData.explodedOffset = new THREE.Vector3(2.2, 0.65, -0.2);
  coolerGroup.userData.labelAnchor = new THREE.Vector3(0.25, 0.55, 0);

  // Cold plate
  const coldPlate = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.42, 0.42), copperMat);
  coldPlate.position.x = -0.4;
  coolerGroup.add(coldPlate);

  // 4 curved copper heatpipes
  for (let i = 0; i < 4; i++) {
    const zOff = -0.15 + i * 0.1;
    const pipeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.38, -0.18, zOff),
      new THREE.Vector3(-0.1, -0.32, zOff),
      new THREE.Vector3(0.22, 0, zOff),
      new THREE.Vector3(-0.1, 0.32, zOff),
      new THREE.Vector3(-0.38, 0.18, zOff),
    ]);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 20, 0.024, 10, false);
    const pipeMesh = new THREE.Mesh(pipeGeo, copperMat);
    coolerGroup.add(pipeMesh);
  }

  // Stacked aluminum fin array (14 fins)
  for (let f = 0; f < 14; f++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.014, 0.72), aluminumMat);
    fin.position.set(-0.02, -0.36 + f * 0.055, 0);
    coolerGroup.add(fin);
  }

  // Top anodized cover plate with cyan NC mark
  const coolerTopPlate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.04, 0.74), caseTrimMat);
  coolerTopPlate.position.set(-0.02, 0.41, 0);
  coolerGroup.add(coolerTopPlate);

  // Mounted 120mm PWM Fan facing front (+Z)
  const { group: coolerFan, rotor: coolerRotor } = createFanAssembly(
    0.72,
    0.16,
    blackPlasticMat,
    darkMetalMat,
    cyanEmissiveMat
  );
  coolerFan.position.set(-0.02, 0, 0.46);
  coolerGroup.add(coolerFan);
  fanRotors.push(coolerRotor);

  tagComponent(coolerGroup, 'cooler');
  root.add(coolerGroup);

  // =========================================================================
  // 5. RAM (2x DDR5 Heatspreader Modules + Gold Edge + Cyan RGB Lightbars)
  // =========================================================================
  const ramGroup = new THREE.Group();
  ramGroup.position.set(-0.46, 0.9, 0.25);
  ramGroup.userData.assembledPos = ramGroup.position.clone();
  ramGroup.userData.explodedOffset = new THREE.Vector3(1.55, 0.35, 0.55);
  ramGroup.userData.labelAnchor = new THREE.Vector3(0.15, 0.55, 0);

  for (const zOffset of [-0.06, 0.16]) {
    const stick = new THREE.Group();
    stick.position.z = zOffset;

    const heatspreader = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.94, 0.045), darkMetalMat);
    stick.add(heatspreader);

    const goldPins = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.9, 0.025), goldMat);
    goldPins.position.x = -0.17;
    stick.add(goldPins);

    const lightBar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.92, 0.048), cyanEmissiveMat);
    lightBar.position.x = 0.17;
    stick.add(lightBar);

    ramGroup.add(stick);
  }

  tagComponent(ramGroup, 'ram');
  root.add(ramGroup);

  // =========================================================================
  // 6. GPU (Triple-Fan Shroud + Backplate + Fin Stack + PCIe Edge + Power)
  // =========================================================================
  const gpuGroup = new THREE.Group();
  gpuGroup.position.set(0.06, 0.0, -0.54);
  gpuGroup.userData.assembledPos = gpuGroup.position.clone();
  gpuGroup.userData.explodedOffset = new THREE.Vector3(2.1, -0.15, 0.35);
  gpuGroup.userData.labelAnchor = new THREE.Vector3(0.45, 0.15, 0.6);

  // GPU PCB
  const gpuPcb = new THREE.Mesh(new THREE.BoxGeometry(1.12, 0.04, 1.98), blackPlasticMat);
  gpuPcb.position.y = 0.16;
  gpuGroup.add(gpuPcb);

  // Brushed aluminum top backplate
  const gpuBackplate = new THREE.Mesh(new THREE.BoxGeometry(1.14, 0.035, 2.02), caseTrimMat);
  gpuBackplate.position.y = 0.2;
  gpuGroup.add(gpuBackplate);

  // Heatsink core block
  const gpuHeatsink = new THREE.Mesh(new THREE.BoxGeometry(1.06, 0.24, 1.92), aluminumMat);
  gpuHeatsink.position.y = 0.01;
  gpuGroup.add(gpuHeatsink);

  // Beveled shroud faceplate underneath
  const gpuShroud = new THREE.Mesh(new THREE.BoxGeometry(1.16, 0.18, 2.08), darkMetalMat);
  gpuShroud.position.y = -0.14;
  gpuGroup.add(gpuShroud);

  // Side illuminated NC GeForce accent bar
  const gpuAccent = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 1.45), cyanEmissiveMat);
  gpuAccent.position.set(0.59, -0.06, 0);
  gpuGroup.add(gpuAccent);

  // Gold PCIe x16 edge connector facing motherboard (-X)
  const gpuPcieEdge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.025, 0.92), goldMat);
  gpuPcieEdge.position.set(-0.62, 0.16, 0.02);
  gpuGroup.add(gpuPcieEdge);

  // 3 Triple Axial Fans mounted under shroud
  for (const fz of [-0.66, 0, 0.66]) {
    const { group: gpuFan, rotor: gpuRotor } = createFanAssembly(
      0.58,
      0.06,
      blackPlasticMat,
      caseTrimMat,
      cyanEmissiveMat
    );
    gpuFan.rotation.x = Math.PI / 2;
    gpuFan.position.set(0, -0.23, fz);
    gpuGroup.add(gpuFan);
    fanRotors.push(gpuRotor);
  }

  tagComponent(gpuGroup, 'gpu');
  root.add(gpuGroup);

  // =========================================================================
  // 7. M.2 NVMe SSD (PCB + NAND Chips + Gold M-Key + Ribbed Thermal Shield)
  // =========================================================================
  const ssdGroup = new THREE.Group();
  ssdGroup.position.set(-0.58, 0.25, -0.52);
  ssdGroup.userData.assembledPos = ssdGroup.position.clone();
  ssdGroup.userData.explodedOffset = new THREE.Vector3(1.1, 0.05, 0.35);
  ssdGroup.userData.labelAnchor = new THREE.Vector3(0.15, 0.15, 0.25);

  const ssdPcb = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.68), blackPlasticMat);
  ssdGroup.add(ssdPcb);

  const ssdTex = createDriveLabelTexture('NVMe 1TB', 'PCIe 4.0 x4', '#06B6D4', maxAnisotropy);
  textures.push(ssdTex);
  const ssdShield = new THREE.Mesh(
    new THREE.BoxGeometry(0.055, 0.17, 0.62),
    new THREE.MeshStandardMaterial({ map: ssdTex, roughness: 0.32, metalness: 0.72 })
  );
  ssdShield.position.x = 0.035;
  ssdGroup.add(ssdShield);

  const ssdPins = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.15, 0.05), goldMat);
  ssdPins.position.z = -0.35;
  ssdGroup.add(ssdPins);

  tagComponent(ssdGroup, 'ssd');
  root.add(ssdGroup);

  // =========================================================================
  // 8. 3.5" SATA HDD (Cast Aluminum Body + Spec Top Label + Spindle + Connectors)
  // =========================================================================
  const hddGroup = new THREE.Group();
  hddGroup.position.set(0.05, -1.62, 0.38);
  hddGroup.userData.assembledPos = hddGroup.position.clone();
  hddGroup.userData.explodedOffset = new THREE.Vector3(1.65, -0.55, 0.85);
  hddGroup.userData.labelAnchor = new THREE.Vector3(0.3, 0.22, 0);

  const hddBody = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.24, 1.28), darkMetalMat);
  hddGroup.add(hddBody);

  const hddTex = createDriveLabelTexture('4TB HDD', '7200 RPM SATA', '#6366F1', maxAnisotropy);
  textures.push(hddTex);
  const hddTopCover = new THREE.Mesh(
    new THREE.BoxGeometry(0.84, 0.03, 1.18),
    new THREE.MeshStandardMaterial({ map: hddTex, roughness: 0.35, metalness: 0.65 })
  );
  hddTopCover.position.y = 0.125;
  hddGroup.add(hddTopCover);

  const spindleHub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.14, 0.04, 24),
    aluminumMat
  );
  spindleHub.position.set(0, 0.13, 0.18);
  hddGroup.add(spindleHub);

  tagComponent(hddGroup, 'hdd');
  root.add(hddGroup);

  // =========================================================================
  // 9. POWER SUPPLY UNIT (PSU Housing + Fan Grille + Modular Cables)
  // =========================================================================
  const psuGroup = new THREE.Group();
  psuGroup.position.set(0, -1.62, -1.28);
  psuGroup.userData.assembledPos = psuGroup.position.clone();
  psuGroup.userData.explodedOffset = new THREE.Vector3(1.5, -0.65, -0.95);
  psuGroup.userData.labelAnchor = new THREE.Vector3(0.4, 0.35, -0.1);

  const psuBody = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.84, 1.48), caseTrimMat);
  psuGroup.add(psuBody);

  const psuTex = createDriveLabelTexture('NC-850W', '80+ GOLD MODULAR', '#F59E0B', maxAnisotropy);
  textures.push(psuTex);
  const psuSidePlate = new THREE.Mesh(
    new THREE.BoxGeometry(0.03, 0.64, 1.24),
    new THREE.MeshStandardMaterial({ map: psuTex, roughness: 0.4, metalness: 0.45 })
  );
  psuSidePlate.position.x = 0.695;
  psuGroup.add(psuSidePlate);

  // AC socket & rocker switch on rear (-Z)
  const acSocket = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.05), blackPlasticMat);
  acSocket.position.set(-0.25, -0.12, -0.75);
  psuGroup.add(acSocket);

  // Braided modular 24-pin cable curve exiting front (+Z)
  const cableCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.35, 0.15, 0.74),
    new THREE.Vector3(-0.68, 0.45, 0.95),
    new THREE.Vector3(-0.65, 0.72, 0.78),
  ]);
  const cableMesh = new THREE.Mesh(new THREE.TubeGeometry(cableCurve, 16, 0.045, 8, false), cableMat);
  psuGroup.add(cableMesh);

  tagComponent(psuGroup, 'psu');
  root.add(psuGroup);

  // =========================================================================
  // 10. CHASSIS COOLING FANS (2x Front Intake + 1x Rear Exhaust)
  // =========================================================================
  const fansGroup = new THREE.Group();
  fansGroup.position.set(0, 0, 0);
  fansGroup.userData.assembledPos = new THREE.Vector3(0, 0, 0);
  fansGroup.userData.explodedOffset = new THREE.Vector3(0, 0, 0.95);
  fansGroup.userData.labelAnchor = new THREE.Vector3(0, 1.15, 1.85);

  // Front Upper Intake Fan
  const { group: frontFanTop, rotor: fRotor1 } = createFanAssembly(
    1.15,
    0.22,
    blackPlasticMat,
    darkMetalMat,
    cyanEmissiveMat
  );
  frontFanTop.position.set(0, 1.08, 1.82);
  fansGroup.add(frontFanTop);
  fanRotors.push(fRotor1);

  // Front Lower Intake Fan
  const { group: frontFanBot, rotor: fRotor2 } = createFanAssembly(
    1.15,
    0.22,
    blackPlasticMat,
    darkMetalMat,
    cyanEmissiveMat
  );
  frontFanBot.position.set(0, -0.22, 1.82);
  fansGroup.add(frontFanBot);
  fanRotors.push(fRotor2);

  // Rear Exhaust Fan
  const { group: rearFan, rotor: fRotor3 } = createFanAssembly(
    1.05,
    0.22,
    blackPlasticMat,
    darkMetalMat,
    cyanEmissiveMat
  );
  rearFan.position.set(0.15, 1.18, -1.92);
  fansGroup.add(rearFan);
  fanRotors.push(fRotor3);

  tagComponent(fansGroup, 'fans');
  root.add(fansGroup);

  const components: Record<PCComponentId, THREE.Group> = {
    case: caseGroup,
    motherboard: moboGroup,
    cpu: cpuGroup,
    cooler: coolerGroup,
    ram: ramGroup,
    gpu: gpuGroup,
    ssd: ssdGroup,
    hdd: hddGroup,
    psu: psuGroup,
    fans: fansGroup,
  };

  const dispose = () => {
    root.traverse((obj) => {
      const mesh = obj as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) {
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      }
    });
    textures.forEach((t) => t.dispose());
  };

  return {
    root,
    components,
    glassPanelGroup,
    fanRotors,
    dispose,
  };
}
