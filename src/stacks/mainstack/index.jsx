import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../../screens/Dashboard/dashboardScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
