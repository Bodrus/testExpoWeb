import { useState, useContext, useEffect } from "react";

import { ThemeContext } from "../context/ThemeContext";
import {
  RANDOMLY_GENERATOR_COLOR,
  STORAGE_KEY_COLOR_METHOD,
  USE_THEME_COLORS,
} from "../utils/constants";
import { getRandomColor } from "../utils/randomUtils";
import { loadItem, saveItem } from "../utils/storage";

const useThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [colorMethodName, setColorMethodName] = useState(
    RANDOMLY_GENERATOR_COLOR,
  );
  const [randomTheme, setRandomTheme] = useState(getRandomColor());

  useEffect(() => {
    const loadColorMethodName = async () => {
      const storedColorMethod = await loadItem(STORAGE_KEY_COLOR_METHOD);
      if (storedColorMethod) {
        setColorMethodName(storedColorMethod);
      }
    };

    loadColorMethodName();
  }, []);

  useEffect(() => {
    saveItem(STORAGE_KEY_COLOR_METHOD, colorMethodName);
  }, [colorMethodName]);

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
