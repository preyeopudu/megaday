import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { secondary } from "../../constants/color";
import FavouriteScreen from "../../screens/Bottom/FavouriteScreen";
import SalesScreen from "../../screens/Bottom/SalesScreen";
import MessagesScreen from "../../screens/Bottom/MessagesScreen";
import { FontAwesome5, Feather, Ionicons, Octicons } from "@expo/vector-icons";
import MainStack from "./index";
import AdStack from "../AdStack";

const Tab = createMaterialBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#fff", elevation: 0, height: 70 }}
      activeColor={secondary}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <Octicons name="star" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Sell"
        component={AdStack}
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

export default BottomStack;
