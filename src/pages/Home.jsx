import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { OrthographicCamera } from "@react-three/drei";
import useSpline from "@splinetool/r3f-spline";
import App from "../models/CoffeeCorner";

const Home = () => {
  return (
    <section className="w-full h-screen relative">

      <Suspense fallback={<Loader />}>
      <App />
      </Suspense>
   
    </section>
  );
};

export default Home;
