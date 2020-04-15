import React, { Component } from "react";
import snickersImg from "./assets/images/snickers.png";
import "./Snickers.css";

class Snickers extends Component {
  render() {
    return (
      <div className="Snickers">
        <img src={snickersImg} alt="Snickers" />
        <h1>Go</h1>
      </div>
    );
  }
}

export default Snickers;
