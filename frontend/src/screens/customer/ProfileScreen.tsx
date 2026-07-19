import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, Alert, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../../context/vendorContext/AuthContext';

const ProfileScreen = () => {
  const { logout, user, authUser } = useAuthStore();

  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [loggingOut, setLoggingOut] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        await authUser();
      } catch (error: any) {
        Alert.alert('Error', error.message || 'Failed to load your profile');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await authUser();
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to refresh your profile');
    } finally {
      setRefreshing(false);
    }
  };

  const getInitials = (name?: string): string => {
    if (!name) return '?';
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        style: 'destructive',
        onPress: async () => {
          setLoggingOut(true);
          try {
            await logout();
          } catch (error: any) {
            Alert.alert('Error', error.message || 'Failed to log out. Please try again.');
          } finally {
            setLoggingOut(false);
          }
        }
      }
    ]);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Loading your profile…</Text>
      </SafeAreaView>
    );
  }

  const infoRows: { icon: string; label: string; value?: string }[] = [
    { icon: '👤', label: 'Role', value: user?.role },
    { icon: '📞', label: 'Phone', value: user?.phone },
    { icon: '📍', label: 'Address', value: user?.address }
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#6366F1" colors={['#6366F1']} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{getInitials(user?.name)}</Text>
          </View>
          <Text style={styles.userName}>{user?.name || 'Unnamed User'}</Text>
          {user?.role ? (
            <View style={styles.roleBadge}>
              <Text style={styles.roleBadgeText}>{user.role}</Text>
            </View>
          ) : null}
        </View>

        <View style={styles.infoCard}>
          {infoRows.map((row, index) => (
            <View
              key={row.label}
              style={[styles.infoRow, index === infoRows.length - 1 && styles.infoRowLast]}
            >
              <View style={styles.infoIconCircle}>
                <Text style={styles.infoIconText}>{row.icon}</Text>
              </View>
              <View style={styles.infoTextBlock}>
                <Text style={styles.infoLabel}>{row.label}</Text>
                <Text style={styles.infoValue}>{row.value || 'Not provided'}</Text>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          disabled={loggingOut}
          activeOpacity={0.85}
        >
          {loggingOut ? (
            <ActivityIndicator size="small" color="#DC2626" />
          ) : (
            <Text style={styles.logoutButtonText}>Log Out</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F6FA' },
  loadingText: { marginTop: 12, color: '#6B7280', fontSize: 14, fontWeight: '500' },

  scrollContent: { paddingHorizontal: 20, paddingBottom: 32, flexGrow: 1 },

  header: { paddingTop: 12, paddingBottom: 16 },
  headerTitle: { fontSize: 26, fontWeight: '800', color: '#111827', letterSpacing: -0.5 },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 28,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F1F5'
  },
  avatarCircle: {
    width: 76, height: 76, borderRadius: 38, backgroundColor: '#6366F1',
    alignItems: 'center', justifyContent: 'center', marginBottom: 12
  },
  avatarText: { color: '#FFFFFF', fontWeight: '800', fontSize: 26 },
  userName: { fontSize: 19, fontWeight: '800', color: '#111827' },

  roleBadge: {
    marginTop: 8,
    backgroundColor: '#EEF0FB',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20
  },
  roleBadgeText: { fontSize: 12, fontWeight: '700', color: '#6366F1', textTransform: 'capitalize' },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F1F5'
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F1F5'
  },
  infoRowLast: { borderBottomWidth: 0 },
  infoIconCircle: {
    width: 38, height: 38, borderRadius: 19, backgroundColor: '#F5F6FA',
    alignItems: 'center', justifyContent: 'center', marginRight: 12
  },
  infoIconText: { fontSize: 16 },
  infoTextBlock: { flex: 1 },
  infoLabel: { fontSize: 12, color: '#6B7280', fontWeight: '600', marginBottom: 2 },
  infoValue: { fontSize: 15, color: '#111827', fontWeight: '600' },

  logoutButton: {
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutButtonText: { color: '#DC2626', fontWeight: '700', fontSize: 15 }
});

export default ProfileScreen;