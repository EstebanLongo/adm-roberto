import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import "./contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
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
      errors.telefono = "Inserte un telefono";
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
    setFormErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleInputSubmit = async (e) => {
    e.preventDefault();
    console.log("SUF", form);
    setFormErrors(validate(form));
    // setIsSubmit(true);
    console.log("FORM ERRORS: ", formErrors);
  };
  return (
    <>
      <NavBar />
      <h1>¿DÓNDE ESTAMOS?</h1>
      <h1 className="h1contact">CONTACTO</h1>
      <p className="pcontact">
        Para pedidos, información y sugerencias, por favor, contacta con
        nosotros a través del formulario de contacto o por teléfono al
        011-34073052
      </p>
      <form className="contactform" onSubmit={handleInputSubmit}>
        <h1 className="titleform">Pedidos | Información | Consultas</h1>
        <div className="divformcontact">
          <input
            placeholder="Nombre"
            className="inputcontactform"
            onChange={(e) => handleInputChange(e)}
            name="nombre"
            required
          />
          {/* {formErrors.nombre && <p className="danger">{formErrors.nombre}</p>} */}
          <input
            placeholder="Apellido"
            className="inputcontactform"
            onChange={(e) => handleInputChange(e)}
            name="apellido"
            required
          />
          {/* {formErrors.apellido && (
            <p className="danger">{formErrors.apellido}</p>
          )} */}
        </div>
        <div className="divformcontact">
          <input
            placeholder="Email"
            className="inputcontactform"
            onChange={(e) => handleInputChange(e)}
            name="email"
            required
          />
          {/* {formErrors.email && <p className="danger">{formErrors.email}</p>} */}
          <input
            placeholder="Telefono"
            className="inputcontactform"
            onChange={(e) => handleInputChange(e)}
            name="telefono"
            required
          />
        </div>
        {/* {formErrors.telefono && <p className="danger">{formErrors.telefono}</p>} */}
        <textarea
          placeholder="Escriba su mensaje aqui..."
          className="mensajecontactform"
        ></textarea>
        <br />
        <button className="btnformcontact" type="submit">
          ENVIAR
        </button>
      </form>
    </>
  );
}
