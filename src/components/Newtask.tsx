import React, { FormEvent, ChangeEvent, InvalidEvent, useState } from "react";
import "./Newtask.modules.css";
import { PlusCircle } from "phosphor-react";





function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>)
{
event.target.setCustomValidity('Esse campo é obrigatório');
}

export function Newtask() {
  return (
    <div>
      <form className="taskForm">
        <textarea name="createTask" onInvalid={handleNewTaskInvalid}
         placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}

<PlusCircle size={32} />;
