import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    height: "25%",
    width: "100%",
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    flex: 1,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginLeft: 5,
  },
  inputContainer: {
    marginTop: -30,
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1a1a1a",
    alignItems: "center",
  },
  statsContainer: {
    width: "90%",
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 24,
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
  },
  individualStatsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdStatsLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#4EA8DE",
  },
  concludedStatsLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#8284FA",
  },
  statsNumberContainer: {
    backgroundColor: "#333333",
    marginLeft: 12,
    borderRadius: 50,
  },
  statsNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  emptyWarningContainer: {
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyWarningBoldLabel: {
    fontWeight: "bold",
    color: "#808080",
    marginTop: 16,
  },
  emptyWarningRegularLabel: {
    color: "#808080",
  },
  todosContainer: {
    width: "90%",
    marginTop: 24,
  },
  scrollViewContainer: {
    alignItems: "center",
  },
});
