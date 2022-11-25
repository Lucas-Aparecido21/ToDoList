import React from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";
import { Task } from "./components/Task";

export function App() {
  return (
    <div>
      <Header />

      <div>
        <Newtask />
      </div>
      <div>
        <Task />
    
      </div>
    </div>
  );
}
