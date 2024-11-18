import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TemperatureScreen } from "./Screens";

export default function App() {
  return (
    <View style={styles.container}>
      <TemperatureScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
