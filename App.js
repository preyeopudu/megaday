import { Provider } from "react-redux";
import * as Splashscreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import SplashScreen from "./src/screens/splashscreen";

const getFonts = () => {
  Font.loadAsync({
    circular: require("./assets/fonts/circular.ttf"),
    regular: require("./assets/fonts/regular.ttf"),
    bold: require("./assets/fonts/bold.ttf"),
    circularbold: require("./assets/fonts/circularbold.ttf"),
    circularmedium: require("./assets/fonts/circularmedium.ttf"),
    medium: require("./assets/fonts/medium.ttf"),
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          circular: require("./assets/fonts/circular.ttf"),
          regular: require("./assets/fonts/regular.ttf"),
          bold: require("./assets/fonts/bold.ttf"),
          circularbold: require("./assets/fonts/circularbold.ttf"),
          circularmedium: require("./assets/fonts/circularmedium.ttf"),
          medium: require("./assets/fonts/medium.ttf"),
        });
      } catch (error) {
      } finally {
        setIsReady(true);
      }
    };
  });

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await Splashscreen.hideAsync();
    }
  }, [isReady]);

  onLayoutRootView();

  if (!isReady) {
    return <SplashScreen />;
  }
};
export default App;
