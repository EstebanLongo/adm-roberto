import React from "react";
import img from "../../assets/agua-de-mar1.jpg";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import "./landingpage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <nav className="navlanding">
        <h1 className="titlenavlanding">Agua de Mar - RL</h1>
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
