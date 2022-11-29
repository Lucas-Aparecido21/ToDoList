import React from "react";
import "./TaskList.modules.css";
import { Trash } from "phosphor-react";
import { ITask } from "../App";

interface Props {
  task: ITask;
 
}

export function TaskList({ task }: Props) {



  return (
    <div className="task">
      <button className="check">
        <div />
      </button>
      <p>{task.title}</p>
      <button className="deleteButton">
        <Trash size={20} />
      </button>
    </div>
  );
}
function onDeteleTask(task: ITask) {
  throw new Error("Function not implemented.");
}

