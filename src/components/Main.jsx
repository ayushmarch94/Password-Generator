import React, { useState, useRef } from "react";
import "./Main.css";

export default function Main() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("");
  const [includeCapital, setIncludeCapital] = useState(false);
  const [includeSmall, setIncludeSmall] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSymbol, setIncludeSymbol] = useState(false);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!includeCapital && !includeSmall && !includeNumber && !includeSymbol) {
      alert("Please select at least one checkbox!");
      return;
    }
    let charset = "";
    if (includeCapital) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSmall) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumber) charset += "0123456789";
    if (includeSymbol) charset += "!@#$%^&*()";
    let newPassword = "";
    if (charset.length > 0) {
      for (let i = 0; i < length; i++) {
        newPassword += charset[Math.floor(Math.random() * charset.length)];
      }
    }
    setPassword(newPassword);
  };

  const handleCopy = () => {
    const passwordText = passwordRef.current.textContent;
    navigator.clipboard.writeText(passwordText);
    alert("Password copied");
  };

  return (
    <div className="page">
      <div className="main">
        <div className="container">
          <div className="view">
            <div className="output" ref={passwordRef}>
              <p>{password}</p>
            </div>
            <div className="alength">
              <p>Length</p>
            </div>
            <div className="text">
              <p>Capital</p>
            </div>
            <div className="text">
              <p>Small</p>
            </div>
            <div className="text">
              <p>Number</p>
            </div>
            <div className="text">
              <p>Symbol</p>
            </div>
          </div>
          <div className="formier">
            <div className="copy" onClick={handleCopy}>
              <img src={require("../Images/copy.png")} width={30} />
            </div>
            <form onSubmit={handleSubmit}>
              <input
                className="length"
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                required
              />
              <input
                className="capital"
                type="checkbox"
                checked={includeCapital}
                onChange={(e) => setIncludeCapital(e.target.checked)}
              />
              <input
                className="small"
                type="checkbox"
                checked={includeSmall}
                onChange={(e) => setIncludeSmall(e.target.checked)}
              />
              <input
                className="number"
                type="checkbox"
                checked={includeNumber}
                onChange={(e) => setIncludeNumber(e.target.checked)}
              />
              <input
                className="symbol"
                type="checkbox"
                checked={includeSymbol}
                onChange={(e) => setIncludeSymbol(e.target.checked)}
              />
              <button className="btn" type="submit">Generate Password</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer"> 
        <p>@Ayush</p>
      </div>
    </div>
  );
}
