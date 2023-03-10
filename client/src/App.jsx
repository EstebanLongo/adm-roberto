import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home.jsx";
import Info from "./components/Informacion/Info.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route index element={<LandingPage />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;
