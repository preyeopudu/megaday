import { Provider } from "react-redux";
import * as Splashscreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { View } from "react-native";

const getFonts = () => {
  Font.loadAsync({
    circular: require("./assets/fonts/circular.ttf"),
    regular: require("./assets/fonts/regular.ttf"),
    bold: require("./assets/font/bold.ttf"),
    circularbold: require("./assets/font/circularbold.ttf"),
    circularmedium: require("./assets/font/circularmedium.ttf"),
    medium: require("./assets/font/medium.ttf"),
  });
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        circular: require("./assets/fonts/circular.ttf"),
        regular: require("./assets/fonts/regular.ttf"),
        bold: require("./assets/font/bold.ttf"),
        circularbold: require("./assets/font/circularbold.ttf"),
        circularmedium: require("./assets/font/circularmedium.ttf"),
        medium: require("./assets/font/medium.ttf"),
      });
    };
  });
  return <View></View>;
};
