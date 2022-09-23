import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DealScreen from "../screens/Plans/DealScreen";
import PaymentScreen from "../screens/Plans/PaymentScreen";
import PlanScreen from "../screens/Profile/PlanScreen";

const Stack = createNativeStackNavigator();

const PlanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pricing" component={PlanScreen} />
      <Stack.Screen name="deals" component={DealScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default PlanStack;
