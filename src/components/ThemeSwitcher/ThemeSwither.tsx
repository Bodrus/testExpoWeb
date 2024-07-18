import React from "react";
import { View, Text, Switch } from "react-native";

import styles from "./styles";
import {
  RANDOMLY_GENERATOR_COLOR,
  USE_THEME_COLORS,
} from "../../utils/constants";

interface ThemeSwitcherProps {
  color: string;
  colorMethodName: RANDOMLY_GENERATOR_COLOR | USE_THEME_COLORS;
  toggleSwitch: () => void;
  background: string;
}

const ThemeSwitcher = ({
  color,
  colorMethodName,
  toggleSwitch,
  background,
}: ThemeSwitcherProps) => {
  const isRandom = colorMethodName === RANDOMLY_GENERATOR_COLOR;

  return (
    <View style={[styles.root, { backgroundColor: background }]}>
      <View style={styles.container}>
        <Text style={[styles.label, { color }]}>
          {colorMethodName.toString()}
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isRandom ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isRandom}
        />
      </View>
    </View>
  );
};

export default ThemeSwitcher;
