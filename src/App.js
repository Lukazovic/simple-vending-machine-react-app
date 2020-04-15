import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Snickers from "./Snickers";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <VendingMachine />} />
      <Route exact path="/chips" render={() => <Chips />} />
      <Route exact path="/soda" render={() => <Soda />} />
      <Route exact path="/snickers" render={() => <Snickers />} />
    </div>
  );
}

export default App;
