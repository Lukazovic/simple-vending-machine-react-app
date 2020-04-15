import React, { Component } from "react";
import vendingMachineImage from "./assets/images/vending-machine.jpg";
import "./VendingMachine.css";

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <h2 className="VendingMachine-title">What would you like?</h2>
        <img src={vendingMachineImage} alt="Vending machine" />
        <div className="VendingMachine-options">
          <h2>Chips</h2>
          <h2>Fanta</h2>
          <h2>Snickers</h2>
        </div>
      </div>
    );
  }
}
