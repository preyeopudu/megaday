import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./authstack";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MainStack from "./mainstack";

const IndexStack = () => {
  const { Auth } = useSelector((state) => state);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          {Auth == false ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
      </BottomSheetModalProvider>
      <StatusBar backgroundColor="#fff" />
    </GestureHandlerRootView>
  );
};

export default IndexStack;
