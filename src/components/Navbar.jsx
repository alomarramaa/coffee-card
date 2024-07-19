//Create Navbar component
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    //Initial in upper left
    <header className="header">
      {/* <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md absolute right-10 -bottom-60 transform -translate-y-1/2"
      >
        <p className="brown-gradient_text">RA</p>
      </NavLink> */}

      <nav className="flex justify-center w-full text-2xl gap-7 font-medium font-italiana">

      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
        }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"

          }
        >
          About
        </NavLink>
        {/* 
        <NavLink
          to="/syrups"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-white"
          }
        >
          Syrups
        </NavLink> */}

        {/* <NavLink
          to="/drinks"
          className={({ isActive }) =>
            isActive ? "text-amber-700" : "text-white"
          }
        >
          Drinks
        </NavLink> */}

      
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link nav-link-active" : "nav-link"
        }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
