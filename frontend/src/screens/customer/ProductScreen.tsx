import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
// show all the products that is subscribed by the customer and give button to remove them
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Customer Subscribed Products</Text>
      </View>
    </SafeAreaView>
  );
}