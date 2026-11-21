import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/RootNavigator";
import "./src/libs/notifications"
import { useEffect } from "react";
import { registerPushToken } from "./src/services/registerForPushToken";
import * as Notifications from "expo-notifications";
import { handleNotificationResponse, handleNotificationReceived } from "./src/libs/notifications";
import { AppState } from "react-native";
import { useAuthStore } from "./src/context/vendorContext/AuthContext";
import { reconcileVendorRequestNotifications } from "./src/context/websocket/WebSocketStore";

export default function App() {
  useEffect(() => {
    registerPushToken();

    const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      handleNotificationResponse(response);
    });

    const receivedListener = Notifications.addNotificationReceivedListener((notification) => {
      handleNotificationReceived(notification);
    });

    const appStateSubscription = AppState.addEventListener("change", (state) => {
      if (state === "active" && useAuthStore.getState().user?.role === "VENDOR") {
        void reconcileVendorRequestNotifications();
      }
    });

    return () => {
      responseListener.remove();
      receivedListener.remove();
      appStateSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}