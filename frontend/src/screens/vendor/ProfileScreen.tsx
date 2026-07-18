import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useAuthStore } from '../../context/vendorContext/AuthContext';
import { useVendorContextStore } from '../../context/vendorContext/VendorContext';

const COLORS = {
  background: '#FFFFFF',
  page: '#FAFAF8',
  surface: '#FAFAF8',
  surfaceAlt: '#F1EFE8',
  border: '#EDEBE3',
  primary: '#2F6FED',
  primarySurface: '#E6F1FB',
  primaryText: '#0C447C',
  danger: '#A32D2D',
  dangerSurface: '#FCEBEB',
  textPrimary: '#1A1A18',
  textSecondary: '#5F5E5A',
  textTertiary: '#9A9990',
}

const ProfileScreen = () => {
  const { logout } = useAuthStore();

  // Destructure vendorAccount from your store
  const { vendorAccount } = useVendorContextStore();

  // Extract vendorProfile based on your exact API response structure
  const profile = vendorAccount;

  // Get first letter of business name or default to 'V'
  const avatarLetter = profile?.businessName?.charAt(0).toUpperCase() || 'V';

  // Two-step confirmation: a mistaken tap should never log someone out.
  // The first dialog checks intent, the second is the final confirmation.
  const handleLogoutPress = () => {
    Alert.alert(
      'Log out?',
      'Are you sure you want to log out of your account?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Log out',
          style: 'destructive',
          onPress: () => {
            Alert.alert(
              'Confirm log out',
              'This will sign you out. Do you want to continue?',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Yes, log out',
                  style: 'destructive',
                  onPress: async () => await logout(),
                },
              ]
            );
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.page} />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

        {/* Header Avatar Section */}
        <View style={styles.headerSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{avatarLetter}</Text>
          </View>
          <Text style={styles.businessName}>{profile?.businessName || 'Business name'}</Text>
          <Text style={styles.ownerName}>Managed by {profile?.user?.name || 'Owner'}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{profile?.user?.role || 'VENDOR'}</Text>
          </View>
        </View>

        {/* Business Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Business information</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Feather name="phone" size={15} color={COLORS.primaryText} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Business phone</Text>
              <Text style={styles.infoValue}>{profile?.businessPhone || 'Not provided'}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Feather name="briefcase" size={15} color={COLORS.primaryText} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Business name</Text>
              <Text style={styles.infoValue} numberOfLines={1} ellipsizeMode="tail">
                {profile?.businessName || 'Not provided'}
              </Text>
            </View>
          </View>
        </View>

        {/* Personal Details Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Owner details</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Feather name="smartphone" size={15} color={COLORS.primaryText} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Personal phone</Text>
              <Text style={styles.infoValue}>{profile?.user?.phone || 'Not provided'}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <View style={styles.infoIcon}>
              <Feather name="map-pin" size={15} color={COLORS.primaryText} />
            </View>
            <View style={styles.infoTextWrap}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>{profile?.user?.address || 'Not provided'}</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogoutPress}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Log out"
        >
          <Feather name="log-out" size={18} color={COLORS.danger} />
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.page,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 28,
  },
  avatarContainer: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '700',
  },
  businessName: {
    fontSize: 24,
    fontWeight: '700',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 2,
    textTransform: 'capitalize',
  },
  ownerName: {
    fontSize: 14.5,
    fontWeight: '500',
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  badge: {
    backgroundColor: COLORS.primarySurface,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    color: COLORS.primaryText,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.primarySurface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextWrap: {
    flex: 1,
    gap: 2,
  },
  infoLabel: {
    fontSize: 12,
    color: COLORS.textTertiary,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  infoValue: {
    fontSize: 15,
    color: COLORS.textPrimary,
    fontWeight: '500',
    lineHeight: 21,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 14,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.dangerSurface,
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 8,
  },
  logoutButtonText: {
    color: COLORS.danger,
    fontSize: 16,
    fontWeight: '600',
  },
});