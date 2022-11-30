import { ITask } from "../App";
import ClipBoard from "../assets/Clipboard.svg";

import "./Task.modules.css";
import { TaskList } from "./TaskList";
interface Props {
  task: ITask[];
 onDelete: (taskID: number) =>void;
 onComplete: (taskID: number) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
const taskQuant = task.length;
const completeTask = task.filter ( (task) => task.complete).length;
  
  return (
    <>
      {task.length > 0 ? (
        <section className="taskMenu">
          <header className="menu">
            <div>
              <p>Tarefas criadas</p>
              <span>{taskQuant}</span>
            </div>

            <div className="complete">
              <p>Concluidas</p>
              <span>{completeTask} de {taskQuant}</span>
            </div>
          </header>

          <div className="tasks">
            {task.map((task) => (
              <TaskList key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
            ))}
          </div>
        </section>
      ) : (
        <article className="taskMenu">
          <header className="menu">
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>

            <div className="complete">
              <p>Concluidas</p>
              <span>0 de 0</span>
            </div>
          </header>

          <div className="taskCenter">
            <img className="taskClip" src={ClipBoard} alt="ClipBoard" />
            <b>Você ainda não tem tarefas cadastradas</b>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </article>
      )}
    </>
  );
}
