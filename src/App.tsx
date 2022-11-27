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

const [task, setTask] = useState<ITask[]> ([]);


export function App() {
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
