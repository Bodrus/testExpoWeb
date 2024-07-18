import { useState, useContext } from "react";

import { RANDOMLY_GENERATOR_COLOR, USE_THEME_COLORS } from "../constants";
import { ThemeContext } from "../context/ThemeContext";
import { getRandomColor } from "../utils";

const useThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [colorMethodName, setColorMethodName] = useState(
    RANDOMLY_GENERATOR_COLOR,
  );
  const [randomTheme, setRandomTheme] = useState(getRandomColor());

  const switchBackgroundColorMethod = () => {
    setColorMethodName((prevState) =>
      prevState === RANDOMLY_GENERATOR_COLOR
        ? USE_THEME_COLORS
        : RANDOMLY_GENERATOR_COLOR,
    );
  };

  const handlePress = () => {
    const actions = {
      [USE_THEME_COLORS]: toggleTheme,
      [RANDOMLY_GENERATOR_COLOR]: () => setRandomTheme(getRandomColor()),
    };

    actions[colorMethodName]();
  };

  const currentTheme =
    colorMethodName === USE_THEME_COLORS ? theme : randomTheme;

  return {
    currentTheme,
    colorMethodName,
    switchBackgroundColorMethod,
    handlePress,
  };
};

export default useThemeSwitcher;
