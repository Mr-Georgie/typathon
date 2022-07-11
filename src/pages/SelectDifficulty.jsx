import React, { useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function SelectDifficulty() {
  const { navigateTo } = useContext(NavContext);
  return (
    <div className="flex flex-col justify-center font-mono gap-4 -mt-10">
      <div className="-mx-8 mb-8 flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white cursor-pointer transform hover:scale-125"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => navigateTo("default")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
      </div>
      <p className="text-white font-bold font-comic text-2xl text-center">
        Select difficulty
      </p>
      <button className="btn" onClick={() => navigateTo("start")}>
        Easy
      </button>
      <button className="btn">Medium</button>
      <button className="btn">Hard</button>
    </div>
  );
}
