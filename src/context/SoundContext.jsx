import React, { useState } from "react";
import sfx from "../sound/sfx2.mp3";

const SoundContext = React.createContext();

function SoundContextProvider(props) {
  const audio = new Audio(sfx);

  const playAudio = () => {
    // start the audio
    audio.play();
    // start from a low volume
    audio.volume = 0.04;
    // increase volume slowly
    const timerOne = setTimeout(() => (audio.volume = 0.06), 2000);
    const timerTwo = setTimeout(() => (audio.volume = 0.08), 3000);
    const timerThree = setTimeout(() => (audio.volume = 0.13), 4000);

    // clear all timeout
    return () => {
      clearTimeout(timerOne);
      clearTimeout(timerTwo);
      clearTimeout(timerThree);
    };
  };

  const pauseAudio = () => {
    audio.volume = 0.0;
    audio.pause();
  };

  return (
    <SoundContext.Provider
      value={{
        audio,
        playAudio,
        pauseAudio,
      }}
    >
      {props.children}
    </SoundContext.Provider>
  );
}

export { SoundContextProvider, SoundContext };
