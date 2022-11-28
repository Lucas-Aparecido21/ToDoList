import React, { FormEvent, ChangeEvent, InvalidEvent, useState } from "react";
import "./Newtask.modules.css";
import { PlusCircle } from "phosphor-react";


const [tasks ,setTask] = useState([' ']);
const [newTask, setNewTask] = useState('');

function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
  event.target.setCustomValidity("Esse campo é obrigatório");
}

function handleChangeNewTask(event: ChangeEvent<HTMLTextAreaElement>)
{
  setNewTask(event.target.value);
  event.target.setCustomValidity('');
}

function handleCreateNewTask(event: FormEvent) {
  event.preventDefault();
  setNewTask('');
  setTask([...tasks, Newtask]);


export function Newtask() {
  return (
    <div>
      <form onSubmit={handleCreateNewTask} className="taskForm">
        <textarea
          name="createTask"
          onInvalid={handleNewTaskInvalid}
          value={newTask}
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeNewTask}
        />
        <button type="submit" disabled={newTask.length === 0}>
          Criar
          <PlusCircle size={16} />

         
        </button>
      </form>
    </div>
  );
}

<PlusCircle size={32} />;
