import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DealScreen from "../screens/Plans/DealScreen";
import PlanScreen from "../screens/Profile/PlanScreen";

const Stack = createNativeStackNavigator();

const PlanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pricing" component={PlanScreen} />
      <Stack.Screen name="deals" component={DealScreen} />
    </Stack.Navigator>
  );
};

export default PlanStack;
