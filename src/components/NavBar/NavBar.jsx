import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <>
      <ul className="navbarlist">
        <li className="navbaritems">
          <Link to="/" className="navlinks">HOME</Link>
        </li>
        <li className="navbaritems">
          <Link to="/info" className="navlinks">INFORMACION</Link>
        </li>
        <li className="navbaritems">
          <Link to="/faqs" className="navlinks">PREGUNTAS FRECUENTES</Link>
        </li>
      </ul>
    </>
  );
}
