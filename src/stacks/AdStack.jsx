import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import AdDetailsScreen from "../screens/Ads/AdDetailsScreen";
import ImagesScreen from "../screens/Ads/ImagesScreen";
import SubmitScreen from "../screens/Ads/SubmitScreen";
import SalesScreen from "../screens/Bottom/SalesScreen";
const Stack = createNativeStackNavigator();

const AdStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Image" component={ImagesScreen} />
      <Stack.Screen name="AdDetails" component={AdDetailsScreen} />
      <Stack.Screen name="AdSubmit" component={SubmitScreen} />
    </Stack.Navigator>
  );
};

export default AdStack;
