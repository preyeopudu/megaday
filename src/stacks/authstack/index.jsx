import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../screens/Auth/AuthScreen";
import ForgotScreen from "../../screens/Auth/ForgotScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import SignupScreen from "../../screens/Auth/SignupScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} de>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
