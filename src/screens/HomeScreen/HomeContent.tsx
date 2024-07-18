import React from "react";
import { Pressable, Text, View } from "react-native";

import styles from "./styles";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

export const HomeContent = () => {
  const {
    currentTheme,
    colorMethodName,
    switchBackgroundColorMethod,
    handlePress,
  } = useThemeSwitcher();

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ThemeSwitcher
          color="black"
          colorMethodName={colorMethodName}
          toggleSwitch={switchBackgroundColorMethod}
        />
      </View>
      <Pressable
        style={[
          styles.container,
          { backgroundColor: currentTheme.backgroundColor },
        ]}
        onPress={handlePress}
      >
        <Text style={[styles.text, { color: currentTheme.textColor }]}>
          Hello there
        </Text>
      </Pressable>
    </View>
  );
};
