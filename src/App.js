import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import NavBar from "./components/NavBar/NavBar";
import Carousel1 from "./components/Carousel1/Carousel1";

const meta = {
  name: "viewport",
  content: "minimum-scale=1, initial-scale=1, width=device-width",
};

function App() {
  return (
    <div className="App" {...meta}>
      <MobileNavBar></MobileNavBar>
      <Header></Header>
      <NavBar></NavBar>
      <Carousel1></Carousel1>
    </div>
  );
}

export default App;
