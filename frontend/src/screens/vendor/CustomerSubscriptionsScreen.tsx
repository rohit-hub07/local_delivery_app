import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useCustomerSubscriptionStore, type VendorSubscribedProduct } from "../../context/vendorContext/CustomerSubscriptionContex";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteParams = {
  CustomerSubscriptions: {
    customerId: string
    customerName: string
  }
}

export default function CustomerSubscriptionsScreen() {
  const route = useRoute<RouteProp<RouteParams, 'CustomerSubscriptions'>>()
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const { customerId, customerName } = route.params
  const { fetchCustomerSubscriptions, fetchVendorSubscriptionStats } = useCustomerSubscriptionStore()

  const [subscriptions, setSubscriptions] = useState<VendorSubscribedProduct[]>([])
  const [statsMap, setStatsMap] = useState<Record<string, { totalDeliveredQuantity: string; receivedDays: number; skippedDays: number }>>({})
  const [loading, setLoading] = useState(false)
  const [statsLoading, setStatsLoading] = useState(false)

  useEffect(() => {
    loadSubscriptions()
  }, [customerId])

  useFocusEffect(
    React.useCallback(() => {
      loadSubscriptions()
    }, [customerId])
  )

  useEffect(() => {
    if (subscriptions.length > 0) {
      loadAllStats()
    }
  }, [subscriptions])

  const loadSubscriptions = async () => {
    try {
      setLoading(true)
      const data = await fetchCustomerSubscriptions(customerId)
      setSubscriptions(data)
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to load subscriptions')
    } finally {
      setLoading(false)
    }
  }

  const loadAllStats = async () => {
    try {
      setStatsLoading(true)
      const results = await Promise.all(
        subscriptions.map(async (sub) => {
          try {
            const stats = await fetchVendorSubscriptionStats(sub.id)
            return { id: sub.id, stats }
          } catch {
            return { id: sub.id, stats: null }
          }
        })
      )
      const map: Record<string, { totalDeliveredQuantity: string; receivedDays: number; skippedDays: number }> = {}
      for (const r of results) {
        if (r.stats) map[r.id] = r.stats
      }
      setStatsMap(map)
    } catch (error: any) {
      console.log('Failed to load stats:', error.message)
    } finally {
      setStatsLoading(false)
    }
  }

  const formatDate = (iso: string) => {
    const date = new Date(iso)
    return date.toLocaleDateString()
  }

  const renderSubscription = ({ item }: { item: VendorSubscribedProduct }) => {
    const stats = statsMap[item.id]
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.productName} numberOfLines={1}>
            {item.product.productName}
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Active</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {item.product.description}
        </Text>

        <View style={styles.divider} />

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Unit</Text>
            <Text style={styles.metaValue}>{item.product.unit}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Daily Qty</Text>
            <Text style={styles.metaValue}>{item.dailyQuantity}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Delivered</Text>
            <Text style={styles.metaValue}>
              {stats ? stats.totalDeliveredQuantity : '—'}
            </Text>
          </View>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Started</Text>
            <Text style={styles.metaValue}>{formatDate(item.startDate)}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Received Days</Text>
            <Text style={styles.metaValue}>{stats ? stats.receivedDays : '—'}</Text>
          </View>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Skipped Days</Text>
            <Text style={styles.metaValue}>{stats ? stats.skippedDays : '—'}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.calendarButton}
          onPress={() => navigation.navigate('VendorSubscriptionCalendar', { subscriptionId: item.id })}
          activeOpacity={0.8}
        >
          <Text style={styles.calendarIcon}>📅</Text>
          <Text style={styles.calendarButtonText}>View Calendar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  if (loading && subscriptions.length === 0) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Loading subscriptions…</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={22} color="#1A1A18" />
        </TouchableOpacity>
        <View style={styles.headerTextWrap}>
          <Text style={styles.headerTitle}>Subscriptions</Text>
          <Text style={styles.headerSubtitle} numberOfLines={1}>
            {customerName}
          </Text>
        </View>
      </View>

      <FlatList
        data={subscriptions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Feather name="inbox" size={32} color="#B4B2A9" />
            <Text style={styles.emptyText}>No subscriptions yet.</Text>
          </View>
        }
        renderItem={renderSubscription}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FB",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F6FB",
  },
  loadingText: {
    marginTop: 12,
    color: "#4B5563",
    fontSize: 16,
    fontWeight: "600",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 14,
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTextWrap: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#475569",
    fontWeight: "600",
    marginTop: 2,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#EEF1F8",
    padding: 16,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    flex: 1,
    fontSize: 17,
    fontWeight: "800",
    color: "#0F172A",
    marginRight: 10,
  },
  badge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "800",
    color: "#15803D",
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEF1F8",
    marginVertical: 14,
  },
  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  metaItem: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 10,
    alignItems: "center",
  },
  metaLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 13,
    fontWeight: "800",
    color: "#0F172A",
    textAlign: "center",
  },
  calendarButton: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    borderRadius: 14,
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  calendarIcon: {
    fontSize: 16,
  },
  calendarButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  emptyWrap: {
    alignItems: "center",
    marginTop: 80,
    gap: 10,
  },
  emptyText: {
    color: "#888780",
    fontSize: 15,
  },
})
