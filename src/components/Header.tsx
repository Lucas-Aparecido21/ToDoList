import React from "react";
import "./Header.modules.css";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
    </header>
  );
}
