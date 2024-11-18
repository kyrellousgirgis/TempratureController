import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#57b0e3",
    padding: 16,
    height: 300,
    elevation: 15,
    borderRadius: 30,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#fff",
  },
  temperatureDisplay: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 24,
  },
});
