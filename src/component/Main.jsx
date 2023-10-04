import React, { useState } from "react";
import "./Main.css";
import "./Res.css";

export default function Main() {
  const [Password, setPassword] = useState("");
  const [Length, setLength] = useState(8);
  const [Capital, setCapital] = useState(false);
  const [Small, setSmall] = useState(false);
  const [Number, setNumber] = useState(false);
  const [Symbol, setSymbol] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const generatePassword = () => {
    const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$%&";

    let possibleCharacters = capitalLetters + smallLetters + numbers + symbols;

    if (Capital) possibleCharacters += capitalLetters;
    if (Small) possibleCharacters += smallLetters;
    if (Number) possibleCharacters += numbers;
    if (Symbol) possibleCharacters += symbols;

    let newPassword = "";
    for (let i = 0; i < Length; i++) {
      newPassword +=
        possibleCharacters[
          Math.floor(Math.random() * possibleCharacters.length)
        ];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(Password);
    window.alert("Password copied");
  };

  return (
    <div className="page">
      <div className="main">
        <div className="container">
          <div className="show">
            <input
              placeholder="Click on generate"
              value={Password}
              type={showPassword ? "text" : "password"}
              readOnly
            />
          </div>
          <img
            id="eye"
            src={require("../Images/eye.png")}
            alt="icon"
            onClick={() => setShowPassword(!showPassword)}
            width={30}
          />
          <img
            src={require("../Images/copy.png")}
            alt="icon"
            onClick={copyPassword}
            width={30}
          />
        </div>
        <div id="down">
          <input
            id="length"
            type="range"
            min="1"
            max="15"
            value={Length}
            onChange={(e) => setLength(e.target.value)}
          />
          <p>Password Length: {Length}</p>
        </div>
        <div id="bottompart">
          <div id="checks">
            <input
              type="checkbox"
              id="capital"
              checked={Capital}
              onChange={() => setCapital(!Capital)}
            />
            <input
              type="checkbox"
              id="small"
              checked={Small}
              onChange={() => setSmall(!Small)}
            />
            <input
              type="checkbox"
              id="number"
              checked={Number}
              onChange={() => setNumber(!Number)}
            />
            <input
              type="checkbox"
              id="char"
              checked={Symbol}
              onChange={() => setSymbol(!Symbol)}
            />
          </div>
          <div id="char">
            <p>A-Z</p>
            <p>a-z</p>
            <p>0-9</p>
            <p>@#$%&</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={generatePassword}>Generate</button>
          <button onClick={copyPassword}>COPY</button>
        </div>
      </div>
    </div>
  );
}
