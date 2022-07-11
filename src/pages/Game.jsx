import React, { useContext } from "react";
import { NavContext } from "../context/NavContext";

export default function Game() {
  const { navigateTo } = useContext(NavContext);
  return (
    <div className="flex flex-col justify-center font-mono gap-4 -mt-10">
      <div className="-mx-8 flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white cursor-pointer transform hover:scale-125"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => navigateTo("select-difficulty")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white cursor-pointer transform hover:scale-125"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </div>
      <div className="rounded py-2 px-6 mx-4 shadow-2xl bg-black/[.5]">
        <p className="text-white font-bold font-serif text-base text-center">
          You have 10 seconds for each word
        </p>
        <p className="text-white font-bold text-3xl text-center animate-pulse">
          00:00
        </p>
      </div>
      <div className="rounded py-2 px-6 mx-4 shadow-2xl bg-black/[.5]">
        <p className="text-white font-bold font-serif text-lg text-center">
          Word:
        </p>
        <p className="text-white font-bold font-serif text-4xl text-center sm:text-6xl">
          Patrotism
        </p>
      </div>

      <input
        type="text"
        placeholder="start typing..."
        className="text-black p-4 text-center mx-4 shadow-2xl font-semibold text-lg
              rounded-lg border-slate-400 border bg-slate-100 focus:bg-white"
      />
      {false && (
        <p className="text-[#f86077] font-bold font-serif text-sm text-center mx-4">
          Incorrect!!!
        </p>
      )}
      <p className="text-white font-bold text-lg text-center uppercase mx-4">
        Score: 1000
      </p>
    </div>
  );
}
