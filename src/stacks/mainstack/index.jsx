import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/Bottom/DashboardScreen";
import NotificationScreen from "../../screens/Home/NotificationScreen";
import SearchScreen from "../../screens/Home/Searchscreen";
import BottomStack from "./bottomstack";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="main" component={DashboardScreen} />
      <Stack.Screen name="notification" component={NotificationScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
