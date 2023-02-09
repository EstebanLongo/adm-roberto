import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../NavBar/NavBar";
import "./contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    mensaje: "",
  });
  /*------------------validaciones----------------*/
  const validate = (form) => {
    let errors = {};
    if (!form.nombre) {
      errors.nombre = "Inserte un nombre";
    }
    if (!form.apellido) {
      errors.apellido = "Inserte un apellido";
    }
    if (!form.email) {
      errors.email = "Inserte un email";
    }
    if (
      form.email &&
      !form.email.match(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
      )
    ) {
      errors.email = "Inserte un email válido";
    }
    if (!form.telefono) {
      errors.telefono = "Inserte un teléfono";
    }
    if (!form.mensaje) {
      errors.mensaje = "Inserte un mensaje";
    }
    return errors;
  };

  const [formErrors, setFormErrors] = useState({});
  /*------------------fin-validaciones----------------*/

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
    setFormErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(form));
    setFormErrors
      ? alert("Completa todos los campos antes de enviar el formulario!")
      : emailjs
          .sendForm(
            "service_9bvgdru",
            "template_op5cdft",
            formulario.current,
            "hREScCNY6R6146KCo"
          )
          .then(
            (result) => {
              console.log(result.text);
              alert("Email enviado correctamente");
            },
            (error) => {
              console.log(error.text);
            }
          );
    // setIsSubmit(true);
    console.log("FORM ERRORS: ", formErrors);
  };

  const formulario = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_9bvgdru",
  //       "template_op5cdft",
  //       formulario.current,
  //       "hREScCNY6R6146KCo"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Email enviado correctamente");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="divcontainerform">
      <NavBar />
      <h1 className="h1contact">CONTACTO</h1>
      <br />
      <p className="pcontact">
        Para pedidos, información y sugerencias, por favor, contacta con
        nosotros a través del formulario de contacto o por teléfono al
      </p>
      <p className="telefono">011-3086-3988</p>
      <br />
      <form
        ref={formulario}
        onSubmit={handleInputSubmit}
        className="contactform"
      >
        <div className="divformcontact">
          <input
            placeholder="Nombre"
            type="text"
            name="nombre"
            onChange={(e) => handleInputChange(e)}
            className="inputcontactform"
          />
          {formErrors.nombre && <p className="danger">{formErrors.nombre}</p>}
          <input
            placeholder="Apellido"
            className="inputcontactform"
            onChange={(e) => handleInputChange(e)}
            name="apellido"
          />
          {formErrors.apellido && (
            <p className="danger">{formErrors.apellido}</p>
          )}
          <div className="divformcontact">
            <input
              placeholder="Email"
              type="email"
              onChange={(e) => handleInputChange(e)}
              name="email"
              className="inputcontactform"
            />
            {formErrors.email && <p className="danger">{formErrors.email}</p>}
            <input
              placeholder="Teléfono"
              className="inputcontactform"
              onChange={(e) => handleInputChange(e)}
              name="telefono"
            />
            {formErrors.telefono && (
              <p className="danger">{formErrors.telefono}</p>
            )}
          </div>

          <textarea
            name="mensaje"
            placeholder="Escriba su mensaje aqui..."
            className="mensajecontactform"
            onChange={(e) => handleInputChange(e)}
          />
          {formErrors.mensaje && <p className="danger">{formErrors.mensaje}</p>}
          <br />
          <button className="btnformcontact" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
}
