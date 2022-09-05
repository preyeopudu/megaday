import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./authstack";

const IndexStack = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      <StatusBar backgroundColor="#fff" />
    </NavigationContainer>
  );
};

export default IndexStack;
