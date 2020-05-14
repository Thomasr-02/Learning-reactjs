import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Mirror from "./components/Mirror/Mirror";
import Counter from "./components/Counter/Counter";
import CounterProvider from "./content/Count";
function App() {
  return (
    <CounterProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter></Counter>
          <Mirror></Mirror>
        </header>
      </div>
    </CounterProvider>
  );
}

export default App;
