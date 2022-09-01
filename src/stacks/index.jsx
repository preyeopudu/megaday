import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authstack";

const IndexStack = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default IndexStack;
