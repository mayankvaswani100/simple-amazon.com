import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1 className="title">Simple Amazon.com</h1>
      <div className="banner-img"></div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
