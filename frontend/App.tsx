import Toast from "react-native-toast-message";
import AuthNavigation from "./src/navigation/AuthNavigator";

export default function App() {
  return (
    <>
      <AuthNavigation />
      <Toast />
    </>
  )
}