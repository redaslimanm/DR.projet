// « L'iris doré » : particules dorées en anneau façon iris (rappel du logo),
// rotation lente, légère inclinaison qui suit la souris (desktop).
// Tout le mouvement est calculé dans le shader (GPU) : le CPU ne fait
// qu'avancer le temps et lisser la souris.
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BufferGeometry,
  Float32BufferAttribute,
  Points,
  ShaderMaterial,
  NormalBlending,
} from 'three';

// Dégradé or du logo, pondéré vers les tons clairs (lumineux sur le fond crème)
const PALETTE = ['#D3AD85', '#C9A57D', '#B8956A', '#A88560', '#D9B38A', '#B8956A', '#9A7752', '#C9A57D'];
const R_IN = 0.62; // bord de la pupille (caché derrière la photo)
const R_OUT = 1.0; // bord extérieur de l'iris
const FOV = 35;

const vertexShader = /* glsl */ `
  attribute float aAngle;
  attribute float aRadius;
  attribute float aRand;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // rotation lente, vitesse légèrement différente par particule
    float a = aAngle + uTime * (0.04 + aRand * 0.006);
    // « respiration » radiale très douce
    float r = aRadius * (1.0 + 0.018 * sin(uTime * 0.7 + aRand * 6.2831));
    vec3 p = vec3(cos(a) * r, sin(a) * r, (aRand - 0.5) * 0.12);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.45 + aRand * 0.7) * uPixelRatio / -mv.z;

    // plus dense et plus lumineux au milieu de l'anneau, discret sur les bords
    float mid = (${R_IN.toFixed(2)} + ${R_OUT.toFixed(2)}) * 0.5;
    float edge = 1.0 - smoothstep(0.0, (${R_OUT.toFixed(2)} - ${R_IN.toFixed(2)}) * 0.75, abs(aRadius - mid));
    vAlpha = 0.45 + 0.5 * edge;
    vColor = aColor;
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.05, d) * vAlpha;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }
`;

// Couleur sRGB brute (pas de conversion linéaire : le shader écrit directement
// la couleur à l'écran, sinon l'or paraît brun)
const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);

function buildGeometry(count) {
  const fibers = Math.round(count / 40); // « fibres » radiales de l'iris
  const fiberAngles = Array.from({ length: fibers }, (_, i) => (i / fibers) * Math.PI * 2 + Math.random() * 0.04);
  const angle = new Float32Array(count);
  const radius = new Float32Array(count);
  const rand = new Float32Array(count);
  const color = new Float32Array(count * 3);
  const position = new Float32Array(count * 3); // requis par three
  const span = R_OUT - R_IN;

  for (let i = 0; i < count; i++) {
    const kind = Math.random();
    let a;
    let r;
    if (kind < 0.6) {
      // fibres : traits radiaux du bord de la pupille au bord de l'iris
      a = fiberAngles[i % fibers] + (Math.random() - 0.5) * 0.012;
      r = R_IN + span * Math.random();
    } else if (kind < 0.75) {
      // limbe : anneau net au bord extérieur
      a = Math.random() * Math.PI * 2;
      r = R_OUT - 0.02 + Math.random() * 0.03;
    } else if (kind < 0.87) {
      // collerette : anneau ondulé à mi-hauteur
      a = Math.random() * Math.PI * 2;
      r = R_IN + span * 0.32 + Math.sin(a * 14) * 0.015 + (Math.random() - 0.5) * 0.02;
    } else {
      // poussière dorée autour
      a = Math.random() * Math.PI * 2;
      r = R_IN + span * (Math.random() * 1.15);
    }
    angle[i] = a;
    radius[i] = r;
    rand[i] = Math.random();
    color.set(hexToRgb(PALETTE[(Math.random() * PALETTE.length) | 0]), i * 3);
  }

  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(position, 3));
  g.setAttribute('aAngle', new Float32BufferAttribute(angle, 1));
  g.setAttribute('aRadius', new Float32BufferAttribute(radius, 1));
  g.setAttribute('aRand', new Float32BufferAttribute(rand, 1));
  g.setAttribute('aColor', new Float32BufferAttribute(color, 3));
  return g;
}

export function createIris(container, { count, pointer, fps = 60 }) {
  const renderer = new WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  container.append(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 10);
  // l'anneau (rayon 1) remplit ~95 % du carré
  camera.position.z = R_OUT / 0.95 / Math.tan(((FOV / 2) * Math.PI) / 180);

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 12 },
      uPixelRatio: { value: renderer.getPixelRatio() },
    },
  });
  const points = new Points(buildGeometry(count), material);
  points.frustumCulled = false;
  scene.add(points);

  const resize = () => {
    const { width, height } = container.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    // taille des points proportionnelle à la taille du canvas
    material.uniforms.uSize.value = 12 * (width / 420);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  // Inclinaison qui suit la souris (lissée)
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
  const onPointer = (e) => {
    tilt.tx = (e.clientY / window.innerHeight - 0.5) * 0.5;
    tilt.ty = (e.clientX / window.innerWidth - 0.5) * 0.5;
  };
  if (pointer) window.addEventListener('pointermove', onPointer, { passive: true });

  let last = performance.now();
  let elapsed = 0;
  const minDelta = 1000 / fps - 2; // 30 fps sur mobile : moins de batterie
  const frame = (now) => {
    if (now - last < minDelta) return;
    elapsed += Math.min(now - last, 50) / 1000; // pas de saut après une pause
    last = now;
    material.uniforms.uTime.value = elapsed;
    tilt.x += (tilt.tx - tilt.x) * 0.05;
    tilt.y += (tilt.ty - tilt.y) * 0.05;
    points.rotation.x = tilt.x;
    points.rotation.y = tilt.y;
    renderer.render(scene, camera);
  };

  let running = false;
  return {
    canvas,
    start() {
      if (running) return;
      running = true;
      last = performance.now();
      renderer.setAnimationLoop(frame);
    },
    stop() {
      running = false;
      renderer.setAnimationLoop(null);
    },
    destroy() {
      this.stop();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      points.geometry.dispose();
      material.dispose();
      renderer.dispose();
      canvas.remove();
    },
  };
}
