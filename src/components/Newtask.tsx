import { FormEvent, ChangeEvent, InvalidEvent, useState } from "react";
import "./Newtask.modules.css";
import { PlusCircle } from "phosphor-react";
import { ITask } from "../App";

interface Props {
  setTask: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function Newtask({ setTask }: Props) {
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
        id: task.length + 1,
        title: newTask,
        complete: false,
      },
    ]);
  }
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className="taskForm">
        <textarea
          name="createTask"
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
