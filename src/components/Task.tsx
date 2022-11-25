import React from "react";
import ClipBoard from "../assets/Clipboard.svg";
import './Task.modules.css';
export function Task() {
  return (
    <article className="taskMenu">
      <header>
      <div className="taskCreate">
       <h1> Tarefas</h1>

      </div>

        <div className="taskComplete"> 
         <h1> Completas</h1>
        </div>

      </header>
      
      
      
      
      
      <div className="taskCenter">
        <img className="taskClip" src={ClipBoard} alt="ClipBoard" />
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>

      </div>
    </article>
  );
}
