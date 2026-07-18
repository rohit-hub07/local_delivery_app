import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from 'react-native'; 
// Import customer-specific icons from Lucide
import { Home, ShoppingBag, BellRing, User } from 'lucide-react-native';

import HomeScreen from "../screens/customer/HomeScreen";
import RequestsScreen from "../screens/customer/RequestsScreen";
import ProfileScreen from "../screens/customer/ProfileScreen";
import { VendorScreen } from '../screens/customer/VendorScreen';
const Tab = createBottomTabNavigator();

export default function CustomerTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',   
        tabBarInactiveTintColor: '#6b7280', 
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          // Matching the exact vertical metrics used in your vendor navigator
          height: Platform.OS === 'ios' ? 92 : 72,
          paddingTop: 12, 
          paddingBottom: Platform.OS === 'ios' ? 24 : 10, 
        },
        // 💡 Lifted icons setup
        tabBarIconStyle: {
          marginTop: Platform.OS === 'ios' ? -6 : -4,
          marginBottom: Platform.OS === 'ios' ? 2 : 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: Platform.OS === 'ios' ? 2 : 0, 
          marginBottom: Platform.OS === 'ios' ? 4 : 2,
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconSize = focused ? size + 2 : size; 

          switch (route.name) {
            case 'Home':
              return <Home color={color} size={iconSize} />;
            case 'Vendor':
              return <ShoppingBag color={color} size={iconSize} />;
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
      <Tab.Screen name="Vendor" component={VendorScreen} />
      <Tab.Screen name="Requests" component={RequestsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
