import { StyleSheet } from "react-native";

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flex: 1,
    maxWidth: 1500,
    minWidth: 360,
    width: "100%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
