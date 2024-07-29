import React from "react";

const About = () => {
  return (
    <section className="max-container">
      <h3
        className="subhead-text text-center text-white"
        style={{ fontSize: "4rem" }}
      >
        FAQ
      </h3>
      <div className="py-10 flex flex-col px-0">
        <div className="mt-10 flex flex-col gap-3 text-white text-5xl font-italiana">
          <p>What is Coffee Card?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>
            Coffee Card is the Internet's cozy coffee corner, featuring
            interactive 3D models. It eliminates the clutter and frustration of
            trying to find syrup and coffee recipes through endless Google
            searches, making it easy to recreate your favorite drinks at home.
            It also provides users with unique recipe ideas, and fun interactive
            models to play with.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-white text-5xl font-italiana">
          <p>Where did you base your drink and syrup recipes from?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>
            All recipes are handmade by myself, and been vetted several times to
            test. Drink recipes are inspired by several coffee shops, but not a
            direct recreation.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-white text-5xl font-italiana">
          <p>Can I submit drink and syrup suggestions?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>
            Of course! Please send a message in the contact form or at my email:
            alomar.ramaa@gmail, to send your ideas and suggestions. I'm happy to
            add user suggestions to the website!
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-white text-5xl font-italiana">
          <p>What software did you use to create this website?</p>
        </div>

        <div className="mt-5 flex flex-col gap-3 text-white text-2xl">
          <p>
            All 3D models were designed and made by myself using Spline3D. Arts
            & graphics were made in Procreate on iPad Pro. For code, I used
            React and tailwindcss. All other assets are available online for
            free public use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
