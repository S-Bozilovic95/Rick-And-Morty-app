import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/rick4.png";

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [activePage, setactivePage] = useState<any>(
    sessionStorage.getItem("navbarR&Mactive-page")
  );

  const HandleActivePage = (value: any) => {
    setactivePage(value);
    sessionStorage.setItem("navbarR&Mactive-page", value);
  };

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
          <Link
            to={"/"}
            className={
              activePage === "1"
                ? "navbar__link-box__link link-active"
                : "navbar__link-box__link"
            }
            onClick={() => HandleActivePage("1")}
          >
            Characters
          </Link>

          <Link
            to={"/Episodes"}
            className={
              activePage === "2"
                ? "navbar__link-box__link link-active"
                : "navbar__link-box__link"
            }
            onClick={() => HandleActivePage("2")}
          >
            Episodes
          </Link>

          <Link
            to={"/Locations"}
            className={
              activePage === "3"
                ? "navbar__link-box__link link-active"
                : "navbar__link-box__link"
            }
            onClick={() => HandleActivePage("3")}
          >
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
