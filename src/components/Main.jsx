import React from "react";
import "./Main.css";

export default function Main() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className="page">
      <div className="main">
        <div className="container">
          <div className="view">
            <div className="output"><p> </p></div>
            <div className="a"><p>Length</p></div>
            <div className="a"><p>Capital</p></div>
            <div className="a"><p>Small</p></div>
            <div className="a"><p>Number</p></div>
            <div className="a"><p>Symbol</p></div>
          </div>
          <div className="formier">
            <div className="copy"><img src={require('../Images/copy.png')} width={40} /></div>
            <form onSubmit={handleSubmit}>
              <input placeholder="5" className="length" type="number" />
              <input className="capital" type="checkbox" />
              <input className="small" type="checkbox" />
              <input className="number" type="checkbox" />
              <input className="symbol" type="checkbox" />
              <button type="submit">Generate Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
