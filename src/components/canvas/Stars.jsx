import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as random from "maath/random/dist/maath-random.esm";

const STAR_COUNT = 1500;

const Stars = () => {
  const ref = useRef();
  const dpr = useThree((state) => state.viewport.dpr);
  // Three floats per star; a length that isn't a multiple of 3 leaves NaN points.
  const positions = useMemo(
    () => random.inSphere(new Float32Array(STAR_COUNT * 3), { radius: 1.2 }),
    []
  );

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 45;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#e4e4e7"
          // Fixed pixel size, so stars drifting near the camera don't balloon.
          size={1.1 * dpr}
          sizeAttenuation={false}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  // Stop rendering once the hero has scrolled out of view.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  let frameloop = visible ? "always" : "never";
  if (reduceMotion) frameloop = "demand";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 animate-[fade-in_1.5s_ease-out_both] opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        frameloop={frameloop}
        gl={{ antialias: false, powerPreference: "low-power" }}
      >
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
