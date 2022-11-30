import { FormEvent, ChangeEvent, InvalidEvent, useState } from "react";
import "./Newtask.modules.css";
import { PlusCircle } from "phosphor-react";
import { ITask } from "../App";
import { createUniqueId } from "../utils/createUniqueId";

interface Props {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
  tasks: ITask[];
}

export function Newtask({ setTask, tasks }: Props) {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleChangeNewTask(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
    event.target.setCustomValidity("");
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setNewTask("");
    setTask((task) => [
      ...task,
      {
        id: createUniqueId(tasks),
        title: newTask,
        complete: false,
      },
    ]);
  }
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className="taskForm">
        <textarea
          name="task"
          onInvalid={handleNewTaskInvalid}
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeNewTask}
          required={true}
        />
        <button type="submit" disabled={newTask.length === 0}>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}
