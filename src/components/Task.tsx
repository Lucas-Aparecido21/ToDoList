import React from "react";
import ClipBoard from "../assets/Clipboard.svg";
import "./Task.modules.css";
export function Task() {
  return (
    <article className="taskMenu">
      <div className="taskCenter">
        <img className="taskClip" src={ClipBoard} alt="ClipBoard" />
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </article>
  );
}
