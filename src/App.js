import React from "react";
import logo from "./logo.svg";
import Chart from "./components/Chart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <Chart legendPosition="bottom" />
    </div>
  );
}

export default App;
