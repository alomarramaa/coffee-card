import React from "react";
import FlipCard from "../components/FlipCard";
import vanillaImage from "../cards/Vanilla.png";
import vanillaBackImage from "../cards/Vanilla-back.png";
import caramelBackImage from "../cards/Caramel-Back.png";
import mochaBackImage from "../cards/Mocha-Back.png";
import { Link } from 'react-router-dom';


const Drinks = () => {
  return (
    <section className="max-container">
      <h3
        className="subhead-text text-center text-white font-italiana"
        style={{ fontSize: "4rem" }}
      >
        Flavors
      </h3>
      <div className="m-10 flex flex-col gap-3"></div>

      <div className="mt-5 flex flex-col gap-3 text-white text-2xl font-italiana">
        <p>
          Discover your favorite syrup and coffee recipes, categorized by
          flavor. Hover over each card for more details.
        </p>
      </div>

      <div className="m-10 flex flex-col gap-3"></div>

      {/* <img
        src={vanillaImage}
        alt="Vanilla drink"
        style={{ width: "500px", height: "auto" }}
      />

      <img
        src={vanillaBackImage}
        alt="Vanilla drink"
        style={{ width: "500px", height: "auto" }}
      /> */}

      <div className="card-container">
        <Link to="/vanilla">
          <FlipCard frontImage={vanillaImage} backImage={vanillaBackImage} />
        </Link>{" "}
        <FlipCard frontImage={caramelBackImage} backImage={caramelBackImage} />
        <FlipCard frontImage={mochaBackImage} backImage={mochaBackImage} />
      </div>
    </section>
  );
};

export default Drinks;
