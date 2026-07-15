import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignupScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Signup Screen</Text>
        <Button title="Login instead?" onPress={() => navigation.navigate("Login")} />
      </View>
    </SafeAreaView>
  );
}