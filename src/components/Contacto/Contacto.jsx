import React from "react";
import NavBar from "../NavBar/NavBar";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import "./contacto.css";

export default function Contacto() {
  return (
    <>
      <NavBar />
      <h1>CONTACTO</h1>
      <p>
        Tanto si necesitas información, como si tienes alguna duda, estaremos
        encantados de poder ayudarte.
      </p>
      <h2>¿DÓNDE ESTAMOS?</h2>
      <p>
        Para pedidos, información y sugerencias, por favor, contacta con
        nosotros a través del formulario de contacto o por teléfono al
        011-34073052
      </p>
      <form className="contactform">
        {/* <label>Nombre</label> */}
        <div>Pedidos | Información | Consultas</div>
        <div className="divformcontact">
          <input placeholder="Nombre" className="inputcontactform"></input>
          <input placeholder="Apellido" className="inputcontactform"></input>
        </div>
        <div className="divformcontact">
          <input placeholder="Email" className="inputcontactform"></input>
          <input placeholder="Telefono" className="inputcontactform"></input>
        </div>
        <textarea placeholder="Escriba su mensaje aqui..." className="mensajecontactform"></textarea>
      </form>

      {/* <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input placeholder="Nombre" />
        <FormLabel>Apellido</FormLabel>
        <Input placeholder="Apellido" />
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" />
        <FormLabel>Telefono</FormLabel>
        <Input placeholder="Telefono" />
        <FormLabel>Mensaje</FormLabel>
        <Input placeholder="Mensaje" />
      </FormControl> */}
    </>
  );
}
