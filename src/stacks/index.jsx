import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./authstack";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const IndexStack = () => {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <AuthStack />
        <StatusBar backgroundColor="#fff" />
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
};

export default IndexStack;
