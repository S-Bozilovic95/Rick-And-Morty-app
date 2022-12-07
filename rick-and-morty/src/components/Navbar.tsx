import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/img/rick4.png";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar__box">
        <img className="navbar__logo" src={img} alt="logo" />
        <ul className="navbar__box__regular-menu">
          <li className="navbar__box__regular-menu__item">
            <Link to={"/"} className="navbar__box__regular-menu__item__link">
              Characters
            </Link>
          </li>
          <li className="navbar__box__regular-menu__item">
            <Link
              to={"/Episodes"}
              className="navbar__box__regular-menu__item__link"
            >
              Episodes
            </Link>
          </li>
          <li className="navbar__box__regular-menu__item">
            <Link
              to={"/Locations"}
              className="navbar__box__regular-menu__item__link"
            >
              Locations
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={
          active ? "navbar__hamburger activeHamburger" : "navbar__hamburger"
        }
        onClick={() => setActive(!active)}
      >
        <div className="navbar__hamburger__line one"></div>
        <div className="navbar__hamburger__line two"></div>
        <div className="navbar__hamburger__line three"></div>
      </div>

      <div
        className="navbar__overlay"
        style={active ? { display: "block" } : { display: "none" }}
        onClick={() => setActive(false)}
      ></div>

      <ul
        className={
          active
            ? "navbar__responsive-menu activeMenu"
            : "navbar__responsive-menu"
        }
      >
        <li className="navbar__responsive-menu__item">
          <Link to={"/"} className="navbar__responsive-menu__item__link">
            Characters
          </Link>
        </li>
        <li className="navbar__responsive-menu__item">
          <Link
            to={"/Episodes"}
            className="navbar__responsive-menu__item__link"
          >
            Episodes
          </Link>
        </li>
        <li className="navbar__responsive-menu__item">
          <Link
            to={"/Locations"}
            className="navbar__responsive-menu__item__link"
          >
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
};
