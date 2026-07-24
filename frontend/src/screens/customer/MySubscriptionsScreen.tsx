import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCustomerSubscriptionStore, type SubscriptionStatsType } from '../../context/customerContext/CustomerSubscriptionContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function MySubscriptionsScreen() {
  const { subscriptions, loading, fetchMySubscriptions } = useCustomerSubscriptionStore()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    loadSubscriptions()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      loadSubscriptions()
    }, [])
  )

  const loadSubscriptions = async () => {
    try {
      await fetchMySubscriptions()
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to load subscriptions')
    }
  }

  const onRefresh = async () => {
    setRefreshing(true)
    try {
      await fetchMySubscriptions()
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to refresh subscriptions')
    } finally {
      setRefreshing(false)
    }
  }

  const formatDate = (iso: string) => {
    const date = new Date(iso)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const RequestItem = React.memo(({ label, value }: { label: string; value: string | number }) => (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  ))

  const SubscriptionCard = React.memo(({ item }: { item: SubscriptionStatsType }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.titleWrap}>
          <Text style={styles.productName}>{item.productName}</Text>
          <View style={styles.unitBadge}>
            <Text style={styles.unitText}>{item.productUnit}</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.pillRow}>
          <View style={styles.pill}>
            <Text style={styles.pillLabel}>Daily Quantity</Text>
            <Text style={styles.pillValue}>{item.dailyQuantity}</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillLabel}>Started On</Text>
            <Text style={styles.pillValue}>{formatDate(item.startDate)}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.statsGrid}>
          <RequestItem label="Received Days" value={item.receivedDays} />
          <RequestItem label="Skipped Days" value={item.skippedDays} />
          <RequestItem label="Current Daily Qty" value={item.currentDailyQuantity} />
          <RequestItem label="Upcoming Requests" value={item.upcomingRequests} />
        </View>
      </View>

      <View style={styles.cardFooter}>
        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => navigation.navigate('SubscriptionCalendar', { subscriptionId: item.subscriptionId })}
          activeOpacity={0.8}
        >
          <Text style={styles.calendarButtonIcon}>📅</Text>
          <Text style={styles.calendarButtonText}>View Calendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))

  if (loading && subscriptions.length === 0) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Loading your subscriptions…</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Subscriptions</Text>
        <Text style={styles.headerSubtitle}>
          You have {subscriptions.length} active {subscriptions.length === 1 ? 'subscription' : 'subscriptions'}
        </Text>
      </View>

      <FlatList
        data={subscriptions}
        keyExtractor={(item) => item.subscriptionId}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconCircle}>
              <Text style={styles.emptyIconText}>📋</Text>
            </View>
            <Text style={styles.emptyTitle}>No Subscriptions Yet</Text>
            <Text style={styles.emptyText}>
              When you subscribe to a service, it will show up here with your delivery stats.
            </Text>
          </View>
        }
        renderItem={({ item }) => <SubscriptionCard item={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6FB' },
  centerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F6FB' },
  loadingText: { marginTop: 12, color: '#4B5563', fontSize: 16, fontWeight: '600' },

  header: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18 },
  headerTitle: { fontSize: 30, fontWeight: '800', color: '#0F172A', letterSpacing: -0.5 },
  headerSubtitle: { fontSize: 16, color: '#475569', marginTop: 4, fontWeight: '600' },

  listContent: { paddingHorizontal: 20, paddingBottom: 24, flexGrow: 1 },

  emptyContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 80, paddingHorizontal: 32 },
  emptyIconCircle: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: '#E7ECFB',
    alignItems: 'center', justifyContent: 'center', marginBottom: 18
  },
  emptyIconText: { fontSize: 36 },
  emptyTitle: { fontSize: 20, fontWeight: '800', color: '#0F172A', marginBottom: 6 },
  emptyText: { textAlign: 'center', color: '#475569', fontSize: 16, lineHeight: 22 },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    marginBottom: 18,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#EEF1F8'
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  titleWrap: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 12 },
  productName: { fontSize: 20, fontWeight: '800', color: '#0F172A', flexShrink: 1 },
  unitBadge: {
    marginLeft: 10,
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20
  },
  unitText: { fontSize: 13, fontWeight: '800', color: '#1D4ED8' },

  body: { marginTop: 16 },
  pillRow: { flexDirection: 'row', gap: 12 },
  pill: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 14
  },
  pillLabel: { fontSize: 12, color: '#64748B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.3 },
  pillValue: { fontSize: 15, color: '#0F172A', fontWeight: '800', marginTop: 4 },

  divider: { height: 1, backgroundColor: '#EEF1F8', marginVertical: 16 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  statRow: { width: '47%', backgroundColor: '#F8FAFC', borderWidth: 1.5, borderColor: '#E2E8F0', borderRadius: 14, padding: 14 },
  statLabel: { fontSize: 12, color: '#64748B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.3 },
  statValue: { fontSize: 16, color: '#0F172A', fontWeight: '800', marginTop: 4 },

  cardFooter: { marginTop: 18 },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2563EB',
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3
  },
  calendarButtonIcon: { fontSize: 18 },
  calendarButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' }
})
