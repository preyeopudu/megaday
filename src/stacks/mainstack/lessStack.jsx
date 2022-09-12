import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../../screens/Chat/ChatSreen";
import BottomStack from "./bottomstack";

const Stack = createNativeStackNavigator();

const BottomlessStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottom" component={BottomStack} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default BottomlessStack;
