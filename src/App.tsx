import React from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";
import { Task } from "./components/Task";
import { TaskBar } from "./components/Taskbar";

export function App() {
  return (
    <div>
      <Header />

      <div>
        <Newtask />

        <TaskBar />

        <Task />
      </div>
    </div>
  );
}
