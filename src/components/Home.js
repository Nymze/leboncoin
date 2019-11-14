import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/shop"}>
        <h1 className="Clickme">Click me</h1>
      </Link>
    </div>
  );
}

export default Home;
