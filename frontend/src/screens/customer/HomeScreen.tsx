import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  // show vendor profile and when clicked on the profile show the products in a new page
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Customer Home</Text>
      </View>
    </SafeAreaView>
  );
}