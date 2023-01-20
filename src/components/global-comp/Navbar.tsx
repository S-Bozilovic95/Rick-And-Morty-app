import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/rick4.png";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <nav className={active ? "navbar active-menu" : "navbar"}>
        <div className="navbar__logo-box">
          <img className="navbar__logo-box__logo" src={img} alt="logo" />
          <div
            className="navbar__logo-box__hamburger"
            onClick={() => setActive(!active)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar__link-box">
          <Link to={"/"} className="navbar__link-box__link">
            Characters
          </Link>

          <Link to={"/Episodes"} className="navbar__link-box__link">
            Episodes
          </Link>

          <Link to={"/Locations"} className="navbar__link-box__link">
            Locations
          </Link>
        </div>
      </nav>
      <div
        className="overlay"
        style={active ? { display: "block" } : { display: "none" }}
        onClick={() => setActive(false)}
      ></div>
    </div>
  );
};
