import React, { useEffect } from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";
import { Task } from "./components/Task";
import { useState } from "react";

export interface ITask {
  id: number;
  title: string;
  complete: boolean;
}

export function App() {
  const [task, setTask] = useState<ITask[]>([]);

  function handleDeleteTask(taskID: number) {
    const newTasks = task.filter((task) => task.id !== taskID);
    setTask(newTasks);
  }

  function completeTask(taskID: number) {
    const newTasks = task.map((task) => {
      if (task.id === taskID) {
        return {
          ...task,
          complete: !task.complete,
        };
      }
      return task;
    });
    setTask(newTasks);
  }

  useEffect(() => {
    console.log(task);
  }, [task]);

  return (
    <div>
      <Header />

      <div>
        <Newtask setTask={setTask} tasks={task} />

        <Task
          task={task}
          onDelete={handleDeleteTask}
          onComplete={completeTask}
        />
      </div>
    </div>
  );
}
