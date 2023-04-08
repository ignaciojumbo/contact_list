import React from "react";
import PropTtypes from "prop-types";
import { Task } from "../../models/task.class";

function TaskComponent({ task }) {
  return (
    <div>
      <h2>Nombre: {task.name}</h2>
      <h3>Descripcion: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This task is: {task.completed ? "Completed" : "Pending"}</h5>
    </div>
  );
}

TaskComponent.PropTtypes = {
  tasks: PropTtypes.instanceOf(Task),
};

export default TaskComponent;
