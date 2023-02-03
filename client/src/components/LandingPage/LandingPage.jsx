import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inicio");
  };
  return (
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
  );
}
