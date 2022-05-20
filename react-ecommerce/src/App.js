import React from"react";
import './App.css';
import Header from'./Header';
import Home from "./Home";

function App() {
  return (
    // BEM
    <div className="App">
      <h1>e commerce</h1>
      <Header />
      <Home />
    </div>
  );
}

export default App;
