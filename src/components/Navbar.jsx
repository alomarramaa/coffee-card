//Create Navbar component
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    //Initial in upper left
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="brown-gradient_text">RA</p>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? //when you click on it, it'll turn brown. Otherwise, it's black
                "text-amber-700"
              : "text-white"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/syrups"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-white"
          }
        >
          Syrups
        </NavLink>

        <NavLink
          to="/drinks"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-white"
          }
        >
          Drinks
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
