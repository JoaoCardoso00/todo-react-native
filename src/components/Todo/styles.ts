import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  todoContainer: {
    position: "relative",
    width: "100%",
    height: 65,
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  todoTitle: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  completedTodoTitle: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  trash: {
    position: "absolute",
    right: 16,
  },
});
