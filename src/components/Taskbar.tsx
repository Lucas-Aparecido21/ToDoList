import React from "react";
import "./Taskbar.modules.css";

export function TaskBar() {
  return (
    <header className="taskBar">
      <div className="setWidth">
        <div className="createTask">
          <p>Tarefas criadas</p>
        </div>

        <div className="completeTask">
          <p>Concluídas</p>
          <span></span>
        </div>
      </div>
    </header>
  );
}
