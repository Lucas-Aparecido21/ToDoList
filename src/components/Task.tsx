import React from "react";
import ClipBoard from "../assets/Clipboard.svg";
export function Task() {
  return (
    <article className="taskMenu">
      <div>
        <img src={ClipBoard} alt="ClipBoard" />
      </div>
    </article>
  );
}
