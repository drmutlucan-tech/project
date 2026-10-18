import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const maxAniso = renderer.capabilities.getMaxAnisotropy();
    const loadTex = (url: string) => {
      const t = textureLoader.load(url);
      t.anisotropy = maxAniso;
      return t;
    };
    const nightTexture = loadTex('/textures/earth_night.png');
    const bumpTexture = loadTex('/textures/earth_normal.jpg');
    const specTexture = loadTex('/textures/earth_specular.jpg');
    const moonTexture = loadTex('/textures/moon.jpg');

    // --- Earth in night view: dark surface with glowing city lights ---
    const earthGeometry = new THREE.SphereGeometry(1, 128, 128);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: nightTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.08,
      roughnessMap: specTexture,
      roughness: 0.6,
      metalness: 0.1,
      color: new THREE.Color(0x2a3a55),
      emissiveMap: nightTexture,
      emissive: new THREE.Color(0xffd9a0),
      emissiveIntensity: 1.4,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    // Set initial rotation so Turkey (lon=35) is centered facing camera
    earth.rotation.y = -1.75;
    scene.add(earth);

    // --- Partner location markers ---
    // Convert lat/lon to 3D sphere position
    const latLonToVec3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Turkey (HQ) + solution partner countries
    const partnerLocations = [
      { lat: 39.0, lon: 35.0, isHQ: true, label: 'Turkey' },
      { lat: 40.4, lon: -3.7, isHQ: false, label: 'Spain' },
      { lat: 41.9, lon: 12.5, isHQ: false, label: 'Italy' },
      { lat: 46.6, lon: 2.2, isHQ: false, label: 'France' },
      { lat: 39.9, lon: 116.4, isHQ: false, label: 'China' },
    ];

    const markers: { pulse: THREE.Mesh; ring: THREE.Mesh; isHQ: boolean; phase: number }[] = [];
    const markerGroup = new THREE.Group();

    partnerLocations.forEach((loc) => {
      const pos = latLonToVec3(loc.lat, loc.lon, 1.02);

      // Pulsing dot
      const dotColor = loc.isHQ ? new THREE.Color(0x00d4ff) : new THREE.Color(0x4fc3f7);
      const dotGeo = new THREE.SphereGeometry(loc.isHQ ? 0.022 : 0.015, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({
        color: dotColor,
        transparent: true,
        opacity: 1.0,
      });
      const pulse = new THREE.Mesh(dotGeo, dotMat);
      pulse.position.copy(pos);

      // Expanding ring (ground glow)
      const ringGeo = new THREE.RingGeometry(0.02, 0.05, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: dotColor,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      // Orient ring to face outward from sphere center
      ring.lookAt(0, 0, 0);
      ring.rotateY(Math.PI);

      // Vertical light beam for HQ
      if (loc.isHQ) {
        const beamGeo = new THREE.CylinderGeometry(0.004, 0.001, 0.15, 8);
        const beamMat = new THREE.MeshBasicMaterial({
          color: 0x00d4ff,
          transparent: true,
          opacity: 0.5,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const beam = new THREE.Mesh(beamGeo, beamMat);
        beam.position.copy(pos);
        beam.lookAt(0, 0, 0);
        beam.rotateX(Math.PI / 2);
        beam.translateY(0.075);
        markerGroup.add(beam);
      }

      markerGroup.add(pulse);
      markerGroup.add(ring);
      markers.push({
        pulse,
        ring,
        isHQ: loc.isHQ,
        phase: Math.random() * Math.PI * 2,
      });
    });

    earth.add(markerGroup);

    // --- Moon: bright white with prominent craters ---
    const moonRadius = 0.32;
    const moonGeometry = new THREE.SphereGeometry(moonRadius, 128, 128);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture,
      bumpMap: moonTexture,
      bumpScale: 0.25,
      roughness: 0.85,
      metalness: 0.0,
      color: new THREE.Color(0xffffff),
      emissive: new THREE.Color(0xffffff),
      emissiveMap: moonTexture,
      emissiveIntensity: 1.2,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    // Moon's own light so it always reads as bright white
    const moonLight = new THREE.PointLight(0xffffff, 2.0, 10);
    moon.add(moonLight);

    // Moon orbit parameters
    const moonOrbitRadius = 2.8;
    const moonOrbitTilt = 0.45;

    // --- Lighting (dim, to emphasize emissive city lights) ---
    const ambientLight = new THREE.AmbientLight(0x223344, 0.25);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xddd8cc, 0.6);
    dirLight.position.set(5, 2, 3);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x3a5a8a, 0.35);
    rimLight.position.set(-5, -1, -3);
    scene.add(rimLight);

    // --- Starfield ---
    const starGeo = new THREE.BufferGeometry();
    const starCount = 4000;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const radius = 30 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);
      starSizes[i] = Math.random() * 2.0 + 0.5;
      const brightness = 0.5 + Math.random() * 0.5;
      const tint = Math.random();
      if (tint < 0.7) {
        starColors[i * 3] = brightness * 0.85;
        starColors[i * 3 + 1] = brightness * 0.92;
        starColors[i * 3 + 2] = brightness;
      } else if (tint < 0.9) {
        starColors[i * 3] = brightness;
        starColors[i * 3 + 1] = brightness * 0.85;
        starColors[i * 3 + 2] = brightness * 0.7;
      } else {
        starColors[i * 3] = brightness;
        starColors[i * 3 + 1] = brightness;
        starColors[i * 3 + 2] = brightness * 0.6;
      }
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.2,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // --- Mouse parallax ---
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth - 0.5) * 0.3;
      mouse.ty = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener('mousemove', onMouseMove);

    let raf = 0;
    let moonAngle = 0;
    let frame = 0;
    const animate = () => {
      frame += 1;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      earth.rotation.y += 0.0015;
      stars.rotation.y += 0.00008;

      // Animate partner markers (pulsing + expanding rings)
      markers.forEach((m) => {
        const t = (frame * 0.04 + m.phase) % (Math.PI * 2);
        const pulseFactor = 0.5 + 0.5 * Math.sin(t * 2);
        m.pulse.scale.setScalar(m.isHQ ? 1 + pulseFactor * 0.4 : 1 + pulseFactor * 0.3);
        (m.pulse.material as THREE.MeshBasicMaterial).opacity = 0.6 + pulseFactor * 0.4;

        const ringT = (t % (Math.PI * 2)) / (Math.PI * 2);
        m.ring.scale.setScalar(1 + ringT * 2.5);
        (m.ring.material as THREE.MeshBasicMaterial).opacity = (1 - ringT) * 0.7;
      });

      // Moon orbits around Earth
      moonAngle += 0.0035;
      moon.position.x = Math.cos(moonAngle) * moonOrbitRadius;
      moon.position.z = Math.sin(moonAngle) * moonOrbitRadius;
      moon.position.y = Math.sin(moonAngle) * moonOrbitTilt;
      moon.rotation.y += 0.002;

      camera.position.x = mouse.x * 0.8;
      camera.position.y = -mouse.y * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();
    const onResize = () => {
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeChild(renderer.domElement);
      earthGeometry.dispose();
      earthMaterial.dispose();
      moonGeometry.dispose();
      moonMaterial.dispose();
      moonTexture.dispose();
      starGeo.dispose();
      starMat.dispose();
      nightTexture.dispose();
      bumpTexture.dispose();
      specTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
