import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

import { RANDOMLY_GENERATOR_COLOR, USE_THEME_COLORS } from "../../constants";

interface ThemeSwitcherProps {
  color: string;
  colorMethodName: RANDOMLY_GENERATOR_COLOR | USE_THEME_COLORS;
  toggleSwitch: () => void;
}

const ThemeSwitcher = ({
  color,
  colorMethodName,
  toggleSwitch,
}: ThemeSwitcherProps) => {
  const isRandom = colorMethodName === RANDOMLY_GENERATOR_COLOR;

  return (
    <View style={styles.container} pointerEvents="box-none">
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
  },
  label: {
    fontSize: 18,
    width: 250,
  },
});

export default ThemeSwitcher;
