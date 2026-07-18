import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useAuthStore } from "../../context/AuthContext";

export default function SignupScreen({ navigation }: any) {
  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState<"CUSTOMER" | "VENDOR">("CUSTOMER");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuthStore()


  const handleSignup = async () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    let normalizedNumber = phone.trim().replace(/[\s\-().]/g, "");

    if (normalizedNumber.startsWith("+91")) {
      normalizedNumber = normalizedNumber.slice(3);
    } else if (normalizedNumber.startsWith("91") && normalizedNumber.length > 10) {
      normalizedNumber = normalizedNumber.slice(2);
    }

    if (!phoneRegex.test(normalizedNumber)) {
      Alert.alert("Error", "Invalid phone number!");
      return;
    }

    // 2. API Submission
    setLoading(false);
    try {
      setLoading(true);
      const res = await signup({
        name: name.trim(),
        phone: normalizedNumber,
        role: role,
        address: address.trim(),
      });

      if (res.success || res) {
        Toast.show({
          type: "success",
          text1: "Signup successful",
          position: "top",
          visibilityTime: 2200,
        });

        // Navigate to Login after short delay
        setTimeout(() => {
          navigation.navigate("Login");
        }, 1500);
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Signup failed",
        text2: error.message || "Something went wrong",
        position: "top",
        visibilityTime: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Create Account</Text>

        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        {/* Role Toggle Switch Component */}
        <Text style={styles.label}>Select your role:</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, role === "CUSTOMER" && styles.activeToggle]}
            onPress={() => setRole("CUSTOMER")}
          >
            <Text style={[styles.toggleText, role === "CUSTOMER" && styles.activeToggleText]}>
              Customer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleButton, role === "VENDOR" && styles.activeToggle]}
            onPress={() => setRole("VENDOR")}
          >
            <Text style={[styles.toggleText, role === "VENDOR" && styles.activeToggleText]}>
              Vendor
            </Text>
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSignup}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        {/* Navigation Link */}
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.linkText}>Already have an account? Login instead</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#555",
  },
  toggleContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 8,
    marginBottom: 25,
    overflow: "hidden",
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  activeToggle: {
    backgroundColor: "#007BFF",
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007BFF",
  },
  activeToggleText: {
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkButton: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#007BFF",
    fontSize: 15,
  },
});
