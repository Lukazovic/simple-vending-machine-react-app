import React, { Component } from "react";
import vendingMachineImage from "./assets/images/vending-machine.jpg";
import "./VendingMachine.css";

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <div className="VendingMachine-container">
          <h2 className="VendingMachine-container-title">
            What would you like?
          </h2>
          <img src={vendingMachineImage} alt="Vending machine" />
          <div className="VendingMachine-container-options">
            <h2>Chips</h2>
            <h2>Fanta</h2>
            <h2>Snickers</h2>
          </div>
        </div>
      </div>
    );
  }
}
