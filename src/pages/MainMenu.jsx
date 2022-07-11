import React, { useContext } from "react";

import { NavContext } from "../context/NavContext";

export default function MainMenu() {
  const { navigateTo } = useContext(NavContext);

  return (
    <div className="flex flex-col items-center justify-center font-mono gap-8">
      <p className="text-white font-bold font-comic text-2xl text-center animate-pulse">
        Are you the ultimate speed typer?
      </p>
      <button className="btn" onClick={() => navigateTo("select-difficulty")}>
        Start Game
      </button>
      <button className="btn" onClick={() => navigateTo("highscore")}>
        High Scores
      </button>
      <button className="btn" onClick={() => navigateTo("instruction")}>
        Read instruction
      </button>
    </div>
  );
}
