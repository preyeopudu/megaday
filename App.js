import { Provider } from "react-redux";
import * as Splashscreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useEffect, useState, useCallback } from "react";

import SplashScreen from "./src/screens/splashscreen";
import IndexStack from "./src/stacks";
import { View } from "react-native";
import store from "./src/store/reducers";

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
  const [splash, setSplash] = useState(false);

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
        console.error(error);
      } finally {
        setSplash(true);
        const t = setTimeout(() => {
          setSplash(false);
          setIsReady(true);
        }, 5000);

        return () => clearTimeout(t);
      }
    };
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await Splashscreen.hideAsync();
    }
  }, [isReady]);

  onLayoutRootView();

  if (isReady == false && splash == true) {
    return <SplashScreen />;
  } else if (isReady == true) {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <IndexStack />
        </View>
      </Provider>
    );
  }
};
export default App;
