import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from 'react-native'; 
import { Home, Users, BellRing, User } from 'lucide-react-native';

import HomeScreen from "../screens/vendor/HomeScreen";
import CustomerScreen from "../screens/vendor/CustomersScreen";
import ProfileScreen from "../screens/vendor/ProfileScreen";
import RequestsScreen from "../screens/vendor/RequestsScreen";

const Tab = createBottomTabNavigator();

export default function VendorTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#2563eb',   
        tabBarInactiveTintColor: '#6b7280', 
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          // Increased overall height slightly to accommodate the extra lift
          height: Platform.OS === 'ios' ? 92 : 72,
          paddingTop: 12, // Increased top padding to give lifted icons room
          paddingBottom: Platform.OS === 'ios' ? 24 : 10, 
        },
        // 💡 FIX: Using negative margin to explicitly pull the icons UP
        tabBarIconStyle: {
          marginTop: Platform.OS === 'ios' ? -6 : -4,
          marginBottom: Platform.OS === 'ios' ? 2 : 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          // Adjusted to ensure the label maintains a perfect gap under the lifted icon
          marginTop: Platform.OS === 'ios' ? 2 : 0, 
          marginBottom: Platform.OS === 'ios' ? 4 : 2,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconSize = focused ? size + 2 : size; 

          switch (route.name) {
            case 'Home':
              return <Home color={color} size={iconSize} />;
            case 'Customers':
              return <Users color={color} size={iconSize} />;
            case 'Requests':
              return <BellRing color={color} size={iconSize} />;
            case 'Profile':
              return <User color={color} size={iconSize} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Requests" component={RequestsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
