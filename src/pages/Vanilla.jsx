import React from 'react';
import icedVanillaLatte from "../coffeeGraphics/icedvanillalatte.png";

const VanillaPage = () => {
  return (
    <div>
      <section className="max-container">
        <h3
          className="subhead-text text-center text-white font-italiana"
          style={{ fontSize: "4rem" }}
        >
          Vanilla
        </h3>
        
        <div className="mt-5 flex flex-col gap-3 text-white text-3xl font-italiana">
          <p>
            Explore an iced or hot version of this staple drink.
          </p>
        </div>
        
        <div>
          <img src={icedVanillaLatte} alt="Iced Vanilla Latte" />
  
        </div>
      </section>
    </div>
  );
};

export default VanillaPage;
