import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useContext, useEffect } from "react";

import {
  RANDOMLY_GENERATOR_COLOR,
  STORAGE_KEY_COLOR_METHOD,
  USE_THEME_COLORS,
} from "../constants";
import { ThemeContext } from "../context/ThemeContext";
import { getRandomColor } from "../utils";

const useThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [colorMethodName, setColorMethodName] = useState(
    RANDOMLY_GENERATOR_COLOR,
  );
  const [randomTheme, setRandomTheme] = useState(getRandomColor());

  useEffect(() => {
    const loadColorMethodName = async () => {
      try {
        const storedColorMethod = await AsyncStorage.getItem(
          STORAGE_KEY_COLOR_METHOD,
        );
        if (storedColorMethod) {
          setColorMethodName(storedColorMethod);
        }
      } catch (error) {
        console.error("Failed to load color method name:", error);
      }
    };

    loadColorMethodName();
  }, []);

  useEffect(() => {
    const saveColorMethodName = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY_COLOR_METHOD, colorMethodName);
      } catch (error) {
        console.error("Failed to save color method name:", error);
      }
    };

    saveColorMethodName();
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
