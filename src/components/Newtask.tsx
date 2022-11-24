import React from "react";
import "./Newtask.modules.css";
import { PlusCircle } from "phosphor-react";

export function Newtask() {
  return (
    <div>
      <form className="taskForm">
        <textarea name="createTask" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={16} />
        </button>
      </form>
    </div>
  );
}

<PlusCircle size={32} />;
