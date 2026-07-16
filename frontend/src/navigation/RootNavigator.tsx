import { useState } from "react";
import { useAuthStore } from "../context/AuthContext";
import AuthNavigation from "./AuthNavigator";
import CustomerTabNavigator from "./CustomerNavigator";
import VendorTabNavigator from "./VendorNavigator";
import VendorSetUpScreen from "../screens/vendor/VendorSetUpScreen";
import { useVendorContextStore } from "../context/VendorContext";


export default function RootNavigator() {
  const user = useAuthStore((state) => state.user);
  const hasVendorProfile = useVendorContextStore((state) => state.hasVendorProfile)

  if (!user) {
    return <AuthNavigation />;
  }

  if (user.role === "CUSTOMER") {
    return <CustomerTabNavigator />;
  }

  if (user.role === "VENDOR" && !hasVendorProfile) {
    <VendorSetUpScreen />
  }

  return <VendorTabNavigator />;
}