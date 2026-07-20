import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../context/vendorContext/AuthContext';
import { useVendorContextStore } from '../../context/vendorContext/VendorContext';

const VendorSetUpScreen = () => {
  const { logout } = useAuthStore();
  const { vendorProfile } = useVendorContextStore();


  // Form State
  const [businessName, setBusinessName] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleCreateProfile = async ({navigation}: any) => {
    // 1. Validation
    if (!businessName.trim() || !businessPhone.trim()) {
      Alert.alert("Missing Information", "Please fill in all fields to complete your setup.");
      return;
    }

    if (businessPhone.trim().length < 8) {
      Alert.alert("Invalid Phone", "Please enter a valid business phone number.");
      return;
    }

    try {
      setIsSubmitting(true);
      // 2. Submit to Zustand store
      // Your RootNavigator will automatically redirect when this succeeds
      await vendorProfile({
        businessName: businessName.trim(),
        businessPhone: businessPhone.trim()
      });
    } catch (error: any) {
      Alert.alert("Setup Failed", error.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Business Setup</Text>
            <Text style={styles.subtitle}>Complete your store profile to start managing your shop.</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Acme Retailers"
                placeholderTextColor="#9ca3af"
                value={businessName}
                onChangeText={setBusinessName}
                autoCapitalize="words"
                editable={!isSubmitting}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. +1 234 567 890"
                placeholderTextColor="#9ca3af"
                value={businessPhone}
                onChangeText={setBusinessPhone}
                keyboardType="phone-pad"
                editable={!isSubmitting}
              />
            </View>

            {/* Action Buttons */}
            <TouchableOpacity
              style={[styles.primaryButton, isSubmitting && styles.buttonDisabled]}
              onPress={handleCreateProfile}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#ffffff" size="small" />
              ) : (
                <Text style={styles.primaryButtonText}>Finish Setup</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryButton} 
              onPress={logout}
              disabled={isSubmitting}
            >
              <Text style={styles.secondaryButtonText}>Logout & Go to Login</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VendorSetUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb', // Light slate professional background
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    lineHeight: 24,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#111827',
  },
  primaryButton: {
    backgroundColor: '#2563eb', // Clean corporate blue tint
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonDisabled: {
    opacity: 0.7,
    backgroundColor: '#3b82f6',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#ef4444', // Red indicator for destructive action (Logout)
    fontSize: 15,
    fontWeight: '500',
  },
});
