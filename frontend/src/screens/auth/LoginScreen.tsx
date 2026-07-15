import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { loginUser } from "../../api/auth.api";

export default function LoginScreen({ navigation }: any) {
  // State variables to store user input
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to handle form submission
  const handleLogin = async () => {
    if (!name || !phoneNumber) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const normalizedNumber = phoneNumber.trim().replace(/[\s\-().]/g, "");

    if (!phoneRegex.test(normalizedNumber)) {
      alert("Invalid phone number!")
      return;
    }

    try {
      const res = await loginUser(name, normalizedNumber)
      // console.log("res after hitting the login: ", res)
      if(res.success){
        Toast.show({
          type: "success",
          text1: "Login successful",
          position: "top",
          visibilityTime: 2200,
        });
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2:"Something went wrong",
        position: "top",
        visibilityTime: 3000,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login Screen</Text>

        {/* Name Input Field */}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        {/* Phone Number Input Field */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor="#999"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"

        />

        {/* Submit Action */}
        <View style={styles.buttonSpacing}>
          <Button title="Login" onPress={handleLogin} color="#007AFF" />
        </View>

        {/* Navigation Action */}
        <View style={styles.buttonSpacing}>
          <Button
            title="Go to the signup page"
            onPress={() => navigation.navigate("Signup")}
            color="#666"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// Basic styles for scannable layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  buttonSpacing: {
    marginTop: 10,
  },
});
