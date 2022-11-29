import React from "react";
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
  return (
    <div>
      <Header />

      <div>
        <Newtask setTask={setTask} />

        <Task task={task} />
      </div>
    </div>
  );
}
