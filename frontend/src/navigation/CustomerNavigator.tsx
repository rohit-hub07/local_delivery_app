import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/customer/HomeScreen";
import {MyProductsScreen} from "../screens/customer/MyProductsScreen";
import RequestsScreen from "../screens/customer/RequestsScreen";
import ProfileScreen from "../screens/customer/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function CustomerTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="My Products"
        component={MyProductsScreen}
      />

      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}