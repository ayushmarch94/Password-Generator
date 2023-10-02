import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="page">
      <div className="main">
        <div className="container">
          <div className="show"></div>
          <img src={require("../Images/eye.png")} alt="icon" width={30} />
          <img src={require("../Images/copy.png")} alt="icon" width={30} />
        </div>
        <input id="length" type="range" />
        <div id="bottompart">
          <div id="checks">
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <div id="char">
            <p>A-Z</p>
            <p>a-z</p>
            <p>0-9</p>
            <p>@#$%&</p>
          </div>
        </div>
      </div>
    </div>
  );
}
