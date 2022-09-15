import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import ImagesScreen from "../screens/Ads/ImagesScreen";
import SalesScreen from "../screens/Bottom/SalesScreen";
const Stack = createNativeStackNavigator();

const AdStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Image" component={ImagesScreen} />
    </Stack.Navigator>
  );
};

export default AdStack;
