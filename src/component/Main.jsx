import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="page">
      <div className="main">
        <div className="container">
          <div className="show"></div>
          <img src={require("../Images/eye.png")} width={30} />
          <img src={require("../Images/copy.png")} width={30} />
        </div>
        <input id="length" type="range" />
        <div id="checks">

        </div>
      </div>
    </div>
  );
}
