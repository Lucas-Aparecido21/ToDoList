import React from "react";
import { ITask } from "../App";
import ClipBoard from "../assets/Clipboard.svg";
import "./Task.modules.css";
import { TaskList } from "./TaskList";
interface Props{
  task: ITask[];
}

export function Task({task}: Props) {
  return (
    

    <section className="taskMenu">
      <header className="menu">
      <div>
      <p>Tarefas criadas</p>
      <span>1</span>
      </div>

      <div className="complete">
      <p>Concluidas</p>
      <span>1 de 10</span>
      </div>

      </header>
    
<div className="tasks">
{task.map(      (task) => (
<TaskList key={task.id} task={task}/>

))}
</div>
    </section>  
 
    /* <article className="taskMenu">
      <div className="taskCenter">
        <img className="taskClip" src={ClipBoard} alt="ClipBoard" />
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>




    </article>
    */
  );
}
