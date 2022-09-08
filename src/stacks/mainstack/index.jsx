import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardScreen from "../../screens/Dashboard/DashboardScreen";
import { Image, View, Text } from "react-native";
import { secondary } from "../../constants/color";
import FavouriteScreen from "../../screens/Dashboard/FavouriteScreen";
import SalesScreen from "../../screens/Dashboard/SalesScreen";
import MessagesScreen from "../../screens/Dashboard/MessagesScreen";
import { FontAwesome5, Feather, Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#fff", elevation: 0, height: 70 }}
      // labeled={false}
      activeColor={secondary}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Sell"
        component={SalesScreen}
        options={{
          tabBarLabel: "Sell",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="md-chatbox-ellipses-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="You"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "You",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
