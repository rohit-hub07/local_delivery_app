import React from 'react'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Platform, Text } from 'react-native'; 
import { Home, Users, BellRing, User, ShoppingBag } from 'lucide-react-native'; 
import HomeScreen from "../screens/vendor/HomeScreen"; 
import CustomerScreen from "../screens/vendor/CustomersScreen"; 
import ProfileScreen from "../screens/vendor/ProfileScreen"; 
import RequestsScreen from "../screens/vendor/RequestsScreen"; 
import {MyProductsScreen} from '../screens/vendor/MyProductsScreen'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorSubscriptionCalendarScreen from '../screens/vendor/VendorSubscriptionCalendarScreen';
import CustomerSubscriptionsScreen from '../screens/vendor/CustomerSubscriptionsScreen';

const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator()

function CustomersStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CustomersList" component={CustomerScreen} />
      <Stack.Screen name="CustomerSubscriptions" component={CustomerSubscriptionsScreen} />
      <Stack.Screen name="VendorSubscriptionCalendar" component={VendorSubscriptionCalendarScreen} />
    </Stack.Navigator>
  )
} 

export default function VendorTabNavigator() { 
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
          height: Platform.OS === 'ios' ? 92 : 72, 
          paddingTop: 8, 
          paddingBottom: Platform.OS === 'ios' ? 24 : 10, 
        }, 
        tabBarIconStyle: { 
          marginBottom: 2, 
        }, 
        tabBarLabelStyle: { 
          fontSize: 10, 
          fontWeight: '500', 
        }, 
        tabBarLabel: ({ color }) => (
          <Text numberOfLines={1} style={{ color, fontSize: 10, fontWeight: '500' }}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ color, size, focused }) => { 
          const iconSize = focused ? size + 2 : size; 
          switch (route.name) { 
            case 'Home': return <Home color={color} size={iconSize} />; 
            case 'Customers': return <Users color={color} size={iconSize} />; 
            case 'Requests': return <BellRing color={color} size={iconSize} />; 
            case 'My Products': return <ShoppingBag color={color} size={iconSize} />; 
            case 'Profile': return <User color={color} size={iconSize} />; 
            default: return null; 
          } 
        }, 
      })} 
    > 
      <Tab.Screen name="Home" component={HomeScreen} /> 
      <Tab.Screen name="Customers" component={CustomersStack} /> 
      <Tab.Screen name="My Products" component={MyProductsScreen} /> 
      <Tab.Screen name="Requests" component={RequestsScreen} /> 
      <Tab.Screen name="Profile" component={ProfileScreen} /> 
    </Tab.Navigator> 
  ); 
}
