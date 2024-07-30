import React, { Suspense } from "react";
import Loader from "../components/Loader";
import App from "../models/CoffeeCorner";
import "@fontsource/italiana"; // Defaults to weight 400
import CoffeeCorner from "../models/CoffeeCorner";
import Dock from "../components/Dock";
import Spotify from '../components/Spotify';


const Home = () => {
  return (
    <section className="w-full h-screen relative flex items-start">
    <h1 className="absolute left-60 top-1/3 text-white font-italiana text-8xl">
      Coffee Card
    </h1>
    <div className="absolute left-60 top-1/2 transform -translate-y-1/2 text-white font-italiana text-5xl">
        <div className="mb-2">Explore your favorite</div>
        <div>caffeinated drinks</div>
        <div>& syrup recipes</div>
        <div>at home</div>

        
      </div>

      <div className ="absolute right-60 top-1/3">
           <Spotify />
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <Suspense fallback={<Loader />}>
     

          <App />

          <Dock/>
        </Suspense>
      </div>
    </section>
  );
};

export default Home;