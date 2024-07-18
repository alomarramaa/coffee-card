import React from "react";

const About = () => {
  return (
    <section className="max-container">
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-center text-6xl">FAQ</h3>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>What is Coffee Card?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-lg">
          <p>
            Coffee Card is a website featuring an interactive, 3D coffee corner
            and drinks. The aim is to create a cozy corner for users to find
            their favorite syrup and coffee recipes. 
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>Where did you base your drink and syrup recipes from?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-lg">
          <p>
            All recipes are handmade by myself, and been vetted several times to
            test. Drink recipes are inspired by several coffee shops, but not a
            direct recreation.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>Is this website mobile-friendly? </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-lg">
          <p>
            At the time, no. Due to the 3D models, Coffee Card will load weirdly
            on mobile devices. However, plans to create a mobile app are in the works, so be on the lookout!
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>What software did you use to create this website?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-lg">
          <p>
            All 3D models were designed and made by myself using Spline3D. Arts & graphics
            were made in Procreate on iPad Pro. For code, I used React and
            tailwindcss.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
