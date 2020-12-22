import React from "react";
import "./logs.css";
export default function LoginPage() {
  return (
    <div className="logss">
      <p className="greens">HIDE YOURSELF WITH</p>
      <p className="heads">SHELL DROP</p>
      <p className="greens">AND PROTECT YOUR DATA</p>
      <div className="flexes green1">
        <div className="ib">
          <input className="ip" type="text" placeholder="USERNAME"></input>
          <br></br>{" "}
          <input className="ip" type="text" placeholder="EMAIL"></input>
          <br></br>{" "}
          <input className="ip" type="password" placeholder="PASSWORD"></input>
        </div>
        <div className="ib">
          <input
            className="ip"
            type="text"
            placeholder="EMAIL/USERNAME"
          ></input>
          <br></br>{" "}
          <input className="ip" type="password" placeholder="PASSWORD"></input>
        </div>
      </div>
      <div className="flexes">
        <div className="ib rl">
          <a href='/main'><p> REGISTER</p></a>
        </div>
        <div className="ib rl">
          <a href='/main'><p>LOGIN</p></a>
        </div>
      </div>
    </div>
  );
}
