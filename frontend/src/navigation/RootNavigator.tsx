import { useAuthStore } from "../context/AuthContext";
import AuthNavigation from "./AuthNavigator";
import CustomerTabNavigator from "./CustomerNavigator";
import VendorTabNavigator from "./VendorNavigator";

export default function RootNavigator() {
    const user = useAuthStore((state) => state.user);

    if (!user) {
        return <AuthNavigation />;
    }

    if (user.role === "CUSTOMER") {
        return <CustomerTabNavigator />;
    }

    return <VendorTabNavigator />;
}