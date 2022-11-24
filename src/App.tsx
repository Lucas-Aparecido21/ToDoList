import React from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Newtask } from "./components/Newtask";

export function App() {
  return (
    <div>
      <Header />

      <div>
        <Newtask />
      </div>
    </div>
  );
}
