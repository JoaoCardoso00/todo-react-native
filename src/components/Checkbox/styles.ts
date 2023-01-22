import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkBoxContainer: {
    width: 25,
    height: 25,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBoxContainerInactive: {
    backgroundColor: "transparent",
    borderColor: "#4EA8DE",
    borderWidth: 3,
  },
  checkBoxContainerActive: {
    backgroundColor: "#5E60CE",
  },
});
