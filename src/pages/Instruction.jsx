import React, { useContext } from "react";

import { NavContext } from "../context/NavContext";

export default function () {
  const { navigateTo } = useContext(NavContext);

  return (
    <div className="text-white">
      <div className="-mx-8 flex">
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
      <h4 className="text-center font-extrabold text-4xl mb-8">Instruction:</h4>
      <p className="text-center font-bold font-comic">
        Choose between three levels of difficulty. When the get ready timer
        reaches 0, you will be automaticlly focused onto the input field. Start
        typing! Match the typed word with the one being
      </p>
    </div>
  );
}
