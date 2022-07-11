import React, { useContext } from "react";
import useWordGame from "../hooks/useWordGame";

import MainMenu from "../pages/MainMenu";
import SelectDifficulty from "../pages/SelectDifficulty";
import Game from "../pages/Game";
import Highscores from "../pages/Highscores";
import Instruction from "../pages/Instruction";
import Footer from "./Footer";

import { NavContext } from "../context/NavContext";
import { Transition } from "@headlessui/react";
import Navbar from "./Navbar";

export default function IndexComponent(props) {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(60);

  const { navigation } = useContext(NavContext);

  return (
    <div className="flex justify-center items-center overflow-hidden static z-50">
      {/* navbar */}
      <Navbar />
      {/*  */}

      <div className="bg-glass overflow-hidden">
        <div
          className=" w-full h-full p-14" //bg-black/[.3] dark:bg-black/[.5]
        >
          {/* intro */}
          <Transition
            show={navigation.default}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-75 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <MainMenu />
          </Transition>

          {/* select difficulty */}
          <Transition
            show={navigation.selectDifficulty}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-75 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <SelectDifficulty />
          </Transition>

          {/* highscore */}
          <Transition
            show={navigation.highscore}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-75 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Highscores />
          </Transition>

          {/* game */}
          <Transition
            show={navigation.start}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-75 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Game />
          </Transition>

          {/* instruction */}
          <Transition
            show={navigation.instruction}
            enter="transition ease-in-out duration-700 transform"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-75 transform"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Instruction />
          </Transition>
        </div>
      </div>
      <Footer />
    </div>
  );
}
