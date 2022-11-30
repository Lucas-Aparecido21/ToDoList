import "./TaskList.modules.css";
import { Trash } from "phosphor-react";
import { ITask } from "../App";
import { Check } from "phosphor-react";

interface Props {
  task: ITask;
  onDelete: (taskID: number) => void;
  onComplete: (taskID: number) => void;
}

export function TaskList({ task, onDelete, onComplete }: Props) {
  return (
    <div className="task">
      <button className="check" onClick={() => onComplete(task.id)}>
        {task.complete ? <Check weight="bold" /> : <div />}
      </button>
      <p className={task.complete ? "taskComplete" : ""}>{task.title}</p>
      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
