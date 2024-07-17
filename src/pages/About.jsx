import React from "react";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Welcome to{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Coffee Card{" "}
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
          Coffee Card is a website featuring an interactive, 3D coffee corner
          and drinks. The aim is to create a cozy corner for users to find their
          favorite syrup and coffee recipes.
        </p>
      </div>

      <div className="py-10 flex flex-col"> 
        <h3 className="subhead-text">
        FAQ
        </h3>

      </div>
    </section>
  );
};

export default About;
