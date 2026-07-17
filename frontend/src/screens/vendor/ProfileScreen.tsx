import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { useAuthStore } from '../../context/AuthContext';
import { useVendorContextStore } from '../../context/VendorContext';
import {SafeAreaView} from "react-native-safe-area-context"

const ProfileScreen = () => {
  const { logout } = useAuthStore();
  
  // Destructure vendorAccount from your store
  const { vendorAccount } = useVendorContextStore();
  
  // Extract vendorProfile based on your exact API response structure
  const profile = vendorAccount

  // Get first letter of business name or default to 'V'
  const avatarLetter = profile?.businessName?.charAt(0).toUpperCase() || 'V';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header Avatar Section */}
        <View style={styles.headerSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{avatarLetter}</Text>
          </View>
          <Text style={styles.businessName}>{profile?.businessName || 'Business Name'}</Text>
          <Text style={styles.ownerName}>Managed by {profile?.user?.name || 'Owner'}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{profile?.user?.role || 'VENDOR'}</Text>
          </View>
        </View>

        {/* Business Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Business Information</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Business Phone</Text>
            <Text style={styles.infoValue}>{profile?.businessPhone || 'Not Provided'}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Business Name</Text>
            <Text style={styles.infoValueId} numberOfLines={1} ellipsizeMode="tail">
              {profile?.businessName || 'Not Provided'}
            </Text>
          </View>
        </View>

        {/* Personal Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Owner Details</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Personal Phone</Text>
            <Text style={styles.infoValue}>{profile?.user?.phone || 'Not Provided'}</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Address</Text>
            <Text style={styles.infoValue}>{profile?.user?.address || 'Not Provided'}</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={async () => await logout()}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 32,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6366f1', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
    marginBottom: 16,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  businessName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 2,
    textTransform: 'capitalize',
  },
  ownerName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  badge: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#4f46e5',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'column',
    gap: 4,
  },
  infoLabel: {
    fontSize: 12,
    color: '#9ca3af',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    fontSize: 15,
    color: '#1f2937',
    fontWeight: '500',
    lineHeight: 22,
  },
  infoValueId: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'Courier' 
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginVertical: 14,
  },
  logoutButton: {
    backgroundColor: '#fee2e2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  logoutButtonText: {
    color: '#ef4444',
    fontSize: 16,
    fontWeight: '600',
  },
});
