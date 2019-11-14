import React from "react";
import "../App.css";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-card">
        <form className="hero-form">
          <input
            className="hero-form-input"
            value="que recherchez vous ?"
          ></input>
          <button class="hero-form-btn"> Rechercher</button>
        </form>
      </div>
      <div className="ellipse"></div>
    </div>
  );
}

export default Hero;
