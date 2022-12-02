import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <section className="home container">
      <div className="home__logo"></div>
      <p className="home__desc">
        Welcome to the <span>Rick and Morty</span> web page! <br /> Everything
        you need to know about your favorite show. Search for{" "}
        <Link to={"/Characters"}>Characters</Link>,{" "}
        <Link to={"/Episodes"}>Episodes</Link> or{" "}
        <Link to={"/Locations"}>Locations</Link> and find every detail about{" "}
        <br /> <span>Rick Sanchez</span>, <span>Morty Smith</span> and their
        adventures.
      </p>
    </section>
  );
};
