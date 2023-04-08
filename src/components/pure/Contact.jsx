import React from "react";
import PropTtypes from "prop-types";
import { Contacto } from "../../models/contacto.class";

function Contact({ contact }) {
  return (
    <div>
      <h2>Nombre: {contact.name}</h2>
      <h3>Apellido: {contact.lastName}</h3>
      <h4>Correo: {contact.email}</h4>
      <h5>
        This contact is: {contact.conectado ? "Contacto en linea" : "Contacto no disponible"}
      </h5>
    </div>
  );
}

Contact.PropTtypes = {
  contact: PropTtypes.instanceOf(Contacto),
};

export default Contact;
