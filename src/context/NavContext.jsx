import React, { useState } from "react";

const NavContext = React.createContext();

function NavContextProvider(props) {
  const [navigation, setNavigation] = useState({
    default: true,
    start: false,
    highscore: false,
    selectDifficulty: false,
    instruction: false,
  });

  // function to get user data
  const navigateTo = (to) => {
    if (to === "default") {
      setNavigation({
        default: true,
        start: false,
        highscore: false,
        selectDifficulty: false,
        instruction: false,
      });
    }

    if (to === "start") {
      setNavigation({
        default: false,
        start: true,
        highscore: false,
        selectDifficulty: false,
        instruction: false,
      });
    }

    if (to === "highscore") {
      setNavigation({
        default: false,
        start: false,
        highscore: true,
        selectDifficulty: false,
        instruction: false,
      });
    }

    if (to === "select-difficulty") {
      setNavigation({
        default: false,
        start: false,
        highscore: false,
        selectDifficulty: true,
        instruction: false,
      });
    }

    if (to === "instruction") {
      setNavigation({
        default: false,
        start: false,
        highscore: false,
        selectDifficulty: false,
        instruction: true,
      });
    }
  };

  // pass user and fetchuser method to any child component of UserContext
  return (
    <>
      <NavContext.Provider
        value={{
          navigation,
          navigateTo,
        }}
      >
        {props.children}
      </NavContext.Provider>
    </>
  );
}

export { NavContextProvider, NavContext };
