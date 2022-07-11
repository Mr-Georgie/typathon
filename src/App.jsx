import React, { useState, useContext } from "react";
import Default from "./components/Default";
import IndexComponent from "./components/IndexComponent";

import { NavContextProvider } from "./context/NavContext";
import { SoundContext } from "./context/SoundContext";

import { Transition } from "@headlessui/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { playAudio } = useContext(SoundContext);

  return (
    <NavContextProvider>
      {false && <Default />}
      <Transition
        show={isLoading}
        enter="transition ease-in-out duration-800 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-800 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="loading-gif cursor-pointer"
          onClick={() => [setIsLoading(false), playAudio()]}
        ></div>
      </Transition>
      <Transition
        show={!isLoading}
        enter="transition ease-in-out duration-[2400ms] transform"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-800 transform"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <IndexComponent />
      </Transition>
    </NavContextProvider>
  );
}
