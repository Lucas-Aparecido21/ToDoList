import React, { useState } from "react";
import "./TaskList.modules.css";
import { Trash } from "phosphor-react";
import { ITask } from "../App";

interface Props {
  task: ITask;
}

export function TaskList({ task }: Props) {
  function handleDeleteTask() {
    console.log("delete task");
  }

  return (
    <div className="task">
      <button className="check">
        <div />
      </button>
      <p>{task.title}</p>
      <button className="deleteButton" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
