import React from "react";
import vanillaImage from "../cards/Vanilla.png";

const Drinks = () => {
  return (
    <section className="max-container">
      <h3
        className="subhead-text text-center text-white font-italiana" 
        style={{ fontSize: "4rem" }}
      >
        Drinks
      </h3>
      <div className="m-10 flex flex-col gap-3"> 

</div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl font-italiana">
          <p>Hover over a card to display the recipe, or click on the card to lead to its own page.</p>
        </div>

        <div className="m-10 flex flex-col gap-3"> 

</div>
      

      <img
        src={vanillaImage}
        alt="Vanilla drink"
        style={{ width: "300px", height: "auto" }}
      />
      
    </section>
  );
};

export default Drinks;
