import React from "react";
import "./stylesheets/Home.css";
import hero_section from "../images/hero_section/img0.jpeg";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="hero__section__image"
          src={hero_section}
          alt="prime ads"
        ></img>
      </div>
    </div>
  );
}
