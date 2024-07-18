import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

import { themes } from "../constants";
import { ThemeContextProps } from "../types/theme";
import { getRandomIndex } from "../utils";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedThemeIndex = await AsyncStorage.getItem("themeIndex");

        if (savedThemeIndex) {
          setThemeIndex(parseInt(savedThemeIndex, 10));
        }
      } catch (error) {
        console.log("Failed to load theme:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const saveThemeIndex = async () => {
      try {
        const jsonValue = JSON.stringify(themeIndex);
        await AsyncStorage.setItem("themeIndex", jsonValue);
      } catch (e) {
        console.log("Failed to save theme index:", e);
      }
    };
    if (!loading) {
      saveThemeIndex();
    }
  }, [themeIndex]);

  const toggleTheme = async () => {
    setThemeIndex((prevIndex) => getRandomIndex(themes, prevIndex));
  };

  const theme = themes[themeIndex];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, loading }}>
      {children}
    </ThemeContext.Provider>
  );
};
