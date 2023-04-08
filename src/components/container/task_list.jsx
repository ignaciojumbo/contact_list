import React from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

function TaskListComponent() {
  const defaultTask = new Task(
    "Emila",
    "soy un estudiante",
    false,
    LEVELS.NORMAL
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
      <TaskComponent task={defaultTask} />
    </div>
  );
}

export default TaskListComponent;
