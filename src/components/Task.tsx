import { ITask } from "../App";
import ClipBoard from "../assets/Clipboard.svg";

import "./Task.modules.css";
import { TaskList } from "./TaskList";
interface Props {
  task: ITask[];
}

export function Task({ task }: Props) {
  return (
    <>
      {task.length > 0 ? (
        <section className="taskMenu">
          <header className="menu">
            <div>
              <p>Tarefas criadas</p>
              <span>{task.length}</span>
            </div>

            <div className="complete">
              <p>Concluidas</p>
              <span>1 de {task.length}</span>
            </div>
          </header>

          <div className="tasks">
            {task.map((task) => (
              <TaskList key={task.id} task={task} />
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
