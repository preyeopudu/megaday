import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../../screens/Auth/AuthScreen";
import ForgotScreen from "../../screens/Auth/ForgotScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import MailScreen from "../../screens/Auth/MailScreen";
import NewPassword from "../../screens/Auth/NewPassword";
import SignupScreen from "../../screens/Auth/SignupScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} de>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="Mail" component={MailScreen} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
