import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <ul className="navbarlist">
        <li className="navbaritems">
          <Link to="/home" className="navlinks">HOME</Link>
        </li>
        <li className="navbaritems">
          <Link to="/info" className="navlinks">INFORMACION Y BENEFICIOS</Link>
        </li>
        <li className="navbaritems">
          <Link to="/faqs" className="navlinks">PREGUNTAS FRECUENTES</Link>
        </li>
        <li className="navbaritems">
          <Link to="/contacto" className="navlinks">CONTACTO</Link>
        </li>
      </ul>
    </>
  );
}
