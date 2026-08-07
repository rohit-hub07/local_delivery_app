import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthStore } from "../context/vendorContext/AuthContext";
import AuthNavigation from "./AuthNavigator";
import CustomerTabNavigator from "./CustomerNavigator";
import VendorTabNavigator from "./VendorNavigator";
import VendorSetUpScreen from "../screens/vendor/VendorSetUpScreen";
import { useVendorContextStore } from "../context/vendorContext/VendorContext";

import { useSocketStore } from "../context/websocket/WebSocketStore";

export default function RootNavigator() {
  const user = useAuthStore((state) => state.user);
  const hasVendorProfile = useVendorContextStore((state) => state.hasVendorProfile);
  const checkVendorProfileStatus = useVendorContextStore((state) => state.isCreatedVendorProfile);
  const resetVendorProfile = useVendorContextStore((state) => state.resetVendorProfile);
  

  // Loading state to prevent rendering the wrong navigator before the API responds
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(false);
  const [profileCheckComplete, setProfileCheckComplete] = useState(false);

  const clearAuth = async () => {
    useVendorContextStore.getState().resetVendorProfile();
    useSocketStore.getState().disconnectSocket();
    useAuthStore.setState({ user: null });
    await AsyncStorage.removeItem("auth-storage").catch(() => {});
  };

  useEffect(() => {
    const checkVendorProfile = async () => {
      setIsLoading(true);
      setAuthError(false);
      setProfileCheckComplete(false);

      if (!user) {
        resetVendorProfile();
        setIsLoading(false);
        setProfileCheckComplete(true);
        return;
      }

      if (user.role !== "VENDOR") {
        resetVendorProfile();
        useSocketStore.getState().initCustomerSocket(user.id)
        setIsLoading(false);
        setProfileCheckComplete(true);
        return;
      }

      resetVendorProfile();

      try {
        await checkVendorProfileStatus();
      } catch (error: any) {
        const status = error?.response?.status ?? error?.status;
        if (status === 401 || status === 403) {
          setAuthError(true);
          await clearAuth();
        }
      }
      setIsLoading(false);
      setProfileCheckComplete(true);
    };

    checkVendorProfile();
  }, [user?.id]);

  // Auth error fallback
  if (authError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Session Expired</Text>
        <Text style={styles.errorText}>Please log in again to continue.</Text>
        <TouchableOpacity style={styles.retryButton} onPress={clearAuth} activeOpacity={0.85}>
          <Text style={styles.retryText}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Unauthenticated users
  if (!user) {
    return <AuthNavigation />;
  }

  // Loading state wrapper (shows spinner while checking API)
  if (user.role === "VENDOR" && (!profileCheckComplete || isLoading)) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  //Customers
  if (user.role === "CUSTOMER") {
    return <CustomerTabNavigator />;
  }

  //Vendors without a profile (Fixed: Added missing return statement)
  if (user && user.role === "VENDOR" && !hasVendorProfile) {
    return <VendorSetUpScreen />;
  }

  return <VendorTabNavigator />;
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6FB",
    padding: 24,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#DC2626",
    marginBottom: 8,
    textAlign: "center",
  },
  errorText: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  retryButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 14,
  },
  retryText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 15,
  },
});
