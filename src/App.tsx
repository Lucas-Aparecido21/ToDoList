import React from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";
import { Task } from "./components/Task";
import {useState} from 'react';

export interface ITask{
  id: string;
  title: string;
  complete: boolean;
}




export function App() {

  const [task, setTask] = useState<ITask[]>([
    {
      id: "teste",
      title: "Teste 1",
      complete: true,
    }
  ])
  return (
    <div>
      <Header />

      <div>
        <Newtask />


        <Task task={task} />
      </div>
    </div>
  );
}
