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
    if (!businessName.trim()) {
      Alert.alert("Missing Info", "Please enter your shop or business name.");
      return;
    }
    if (!businessPhone.trim()) {
      Alert.alert("Missing Info", "Please enter your business phone number.");
      return;
    }

    if (businessPhone.trim().length < 8) {
      Alert.alert("Check Your Number", "Please enter a correct business phone number.");
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
      Alert.alert("Setup Failed", error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      "Log Out?",
      "You will need to log in again to set up your shop.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Log Out", style: "destructive", onPress: logout }
      ]
    );
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
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>🏪</Text>
            </View>
            <Text style={styles.title}>Set Up Your Shop</Text>
            <Text style={styles.subtitle}>
              Just two details and you're ready to start taking orders.
            </Text>
          </View>

          {/* Form Fields */}
          <View style={styles.form}>
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>1</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Shop / Business Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Sharma General Store"
                placeholderTextColor="#94A3B8"
                value={businessName}
                onChangeText={setBusinessName}
                autoCapitalize="words"
                editable={!isSubmitting}
              />
              <Text style={styles.helperText}>This is the name customers will see</Text>
            </View>

            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>2</Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. 98765 43210"
                placeholderTextColor="#94A3B8"
                value={businessPhone}
                onChangeText={setBusinessPhone}
                keyboardType="phone-pad"
                editable={!isSubmitting}
              />
              <Text style={styles.helperText}>Customers will call this number</Text>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity
              style={[styles.primaryButton, isSubmitting && styles.buttonDisabled]}
              onPress={handleCreateProfile}
              disabled={isSubmitting}
              activeOpacity={0.85}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#ffffff" size="small" />
              ) : (
                <Text style={styles.primaryButtonText}>Finish Setup</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={confirmLogout}
              disabled={isSubmitting}
              activeOpacity={0.7}
            >
              <Text style={styles.secondaryButtonText}>Log Out</Text>
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
    backgroundColor: '#F4F6FB',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  iconCircle: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#E7ECFB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  iconText: {
    fontSize: 34,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '500',
  },
  form: {
    width: '100%',
  },
  stepBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  stepBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#0F172A',
  },
  helperText: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '600',
    marginTop: 8,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    height: 56,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonDisabled: {
    opacity: 1,
    backgroundColor: '#93C5FD',
    shadowOpacity: 0,
    elevation: 0,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },
  secondaryButton: {
    marginTop: 18,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#DC2626',
    fontSize: 15,
    fontWeight: '700',
  },
});