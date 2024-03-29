import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/Bottom/ProfileScreen";
import AdvertScreen from "../screens/Profile/AdvertScreen";
import FeedBackScreen from "../screens/Profile/Feedback";
import PerformanceScreen from "../screens/Profile/PerformanceScreen";
import SettingScreen from "../screens/Profile/SettingScreen";
import PlanStack from "./PlanStack";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="My Adverts" component={AdvertScreen} />
      <Stack.Screen name="Performance" component={PerformanceScreen} />
      <Stack.Screen name="Megaday plans" component={PlanStack} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
