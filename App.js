import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TemperatureScreen } from "./Screens";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      try {
        // Prevent the splash screen from hiding automatically
        await SplashScreen.preventAutoHideAsync();

        // Perform any necessary setup tasks, e.g., loading assets
        // Simulate a delay for demonstration
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen once setup is complete
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

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
