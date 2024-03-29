import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./authstack";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import BottomStack from "./mainstack/bottomstack";
import BottomlessStack from "./mainstack/lessStack";

const IndexStack = () => {
  const { Auth } = useSelector((state) => state);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          {Auth == false ? <AuthStack /> : <BottomlessStack />}
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default IndexStack;
