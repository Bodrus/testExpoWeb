import React from "react";
import { Pressable, Text } from "react-native";

import styles from "./styles";
import CustomLoader from "../../components/CustomLoader";
import { ThemeContext } from "../../context/ThemeContext";

const HomeScreen = () => {
  const { theme, toggleTheme, loading } = React.useContext(ThemeContext);

  return (
    <>
      {loading && <CustomLoader />}
      {!loading && (
        <Pressable
          style={[styles.container, { backgroundColor: theme.backgroundColor }]}
          onPress={toggleTheme}
        >
          <Text style={[styles.text, { color: theme.textColor }]}>
            Hello there
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;
