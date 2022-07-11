import React, { useContext } from "react";

import { NavContext } from "../context/NavContext";

export default function Highscores() {
  const { navigateTo } = useContext(NavContext);

  return (
    <div className="flex flex-col justify-center font-mono gap-2 -mt-10">
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
      <p className="text-white font-extrabold font-comic text-xl text-center">
        Top 5 High Scores
      </p>
      <div className="p-4 w-full bg-[#FFBD3D] font-bold rounded-lg text-xs text-start grid grid-cols-4 gap-4">
        <span>S/N</span>
        <span className="col-span-2">Nickname</span>
        <span>Word count</span>
      </div>
      <div className="btn text-xs text-start grid grid-cols-4 gap-4">
        <span>01</span>
        <span className="col-span-2">Sly</span>
        <span>4000</span>
      </div>
      <div className="btn text-xs text-start grid grid-cols-4 gap-4">
        <span>02</span>
        <span className="col-span-2">Maverick</span>
        <span>4000</span>
      </div>
      <div className="btn text-xs text-start grid grid-cols-4 gap-4">
        <span>03</span>
        <span className="col-span-2">SmartMan</span>
        <span>4000</span>
      </div>
      <div className="btn text-xs text-start grid grid-cols-4 gap-4">
        <span>04</span>
        <span className="col-span-2">Geek</span>
        <span>4000</span>
      </div>
      <div className="btn text-xs text-start grid grid-cols-4 gap-4">
        <span>05</span>
        <span className="col-span-2">Ultimatum</span>
        <span>4000</span>
      </div>
    </div>
  );
}
