import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Info from "./components/Informacion/Info.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<NavBar />} />
        <Route path="/info" element={<Info />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
}

export default App;
