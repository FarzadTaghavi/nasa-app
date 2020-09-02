import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NasaImages from "./Components/NasaImages";
import axios from "axios";
import Image from "./Components/Image";
function App() {
  return (
    <div className="App">
      <h1>Explore Space...</h1>
      <NasaImages />
    </div>
  );
}

export default App;
