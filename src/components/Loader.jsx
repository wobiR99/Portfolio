import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  const design = {
    fontSize: 14,
    color: "#f1f1f1",
    fontWeight: 800,
    marginTop: 40,
  };
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={design}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
