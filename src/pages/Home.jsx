import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { OrthographicCamera } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import App from "../models/CoffeeCorner";

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      {/* <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight /> */}

      <App />
      {/*         
        </Suspense>
      </Canvas> */}
    </section>
  );
};

export default Home;
