import React from "react";
import "../App.css";
import Logo from "../images/leboncoinlogo.svg";
import { Link } from "react-router-dom";
import { whileStatement } from "@babel/types";

function Nav() {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <div className="nav-links">
        <Link className="logo-link" style={navStyle} to="/home">
          <img className="logo-lb" src={Logo} />
        </Link>
        <Link className="btn-link" style={navStyle} to="/about">
          <button className="btn-nav">
            <svg
              className="btn-svg"
              data-name="Calque 1"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path d="M17.33 10.67h-4v-4a1.33 1.33 0 10-2.66 0v4h-4a1.33 1.33 0 100 2.66h4v4a1.33 1.33 0 102.66 0v-4h4a1.33 1.33 0 100-2.66z"></path>
              <path d="M21.6 0H2.4A2.41 2.41 0 000 2.4v19.2A2.41 2.41 0 002.4 24h19.2a2.41 2.41 0 002.4-2.4V2.4A2.41 2.41 0 0021.6 0zm0 20.4a1.2 1.2 0 01-1.2 1.2H3.6a1.2 1.2 0 01-1.2-1.2V3.6a1.2 1.2 0 011.2-1.2h16.8a1.2 1.2 0 011.2 1.2v16.8z"></path>
            </svg>
            Deposer article
          </button>
        </Link>
        <Link className="shop-link" to="/shop">
          <button className="btn-nav-search">
            <svg
              className="btn-svg-search"
              data-name="Calque 1"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path d="M23.58 21.45l-7-7a9.42 9.42 0 001.62-6.87A9.13 9.13 0 0010.34.07a9.25 9.25 0 00-2.81 18.27 9.25 9.25 0 007-1.76l7 7a1.54 1.54 0 002.11 0 1.56 1.56 0 00-.06-2.13zM9.22 15.5a6.37 6.37 0 116.33-6.37 6.33 6.33 0 01-6.33 6.37z"></path>
            </svg>
            Rechercher
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
