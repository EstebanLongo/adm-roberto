import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";
import img from "../../assets/adm-logo2.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inicio");
  };
  return (
    <>
      <nav className="navlanding">
        <img src={img} alt="img not found" className="imglogo" />
        {/* <h1 className="titlenavlanding">Agua de Mar - RL</h1> */}
      </nav>
      <div className="landingPage">
        <div className="typlanding">
          <h1 className="h1landing">Agua de mar</h1>
          <p className="planding">
            ¡desintoxica, oxigena, alcaliniza y nutre tu organismo!
          </p>
        </div>
        <button className="btnlanding" onClick={handleClick}>
          INGRESA
        </button>
      </div>
    </>
  );
}
