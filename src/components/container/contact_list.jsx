import React from "react";
import { Contacto } from "../../models/contacto.class";
import ContactComponent from "../pure/Contact";

function TaskListComponent() {
  const defaultContact = new Contacto(
    "Emila",
    "Ortega",
    "emiliaortega@gmail.com",
    false
  );

  /*
  const changeState = (id) => {
    console.log("TODO: cambiar el estado de una tarea");
  };
*/
  return (
    <div>
      <div>Your Task:</div>
      {/* TODO: Aplicar un for o map para renderizar una lista */}
      <ContactComponent contact={defaultContact} />
    </div>
  );
}

export default TaskListComponent;
