import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/vendor/HomeScreen";
import CustomerScreen from "../screens/vendor/CustomersScreen";
import ProfileScreen from "../screens/vendor/ProfileScreen";
import RequestsScreen from "../screens/vendor/RequestsScreen";

const Tab = createBottomTabNavigator();

export default function VendorTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Customers"
        component={CustomerScreen}
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