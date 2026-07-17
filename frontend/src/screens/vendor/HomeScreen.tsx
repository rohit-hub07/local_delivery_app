import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCustomerSubscribtionStore } from "../../context/CustomerSubscriptionContex";
import { useVendorContextStore } from "../../context/VendorContext";

interface CustomerState {
  id: string;
  name: string;
  phone: string;
  address: string;
  products: string[];
}

interface ApiSubscription {
  id: string;
  product: { productName: string };
  vendorCustomers: {
    user: { id: string; name: string; phone: string; address: string };
  };
}

export default function HomeScreen() {
  const [vendorCustomers, setVendorCustomers] = useState<CustomerState[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { subscribedCustomers } = useCustomerSubscribtionStore();
  const { vendorAccount } = useVendorContextStore();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await subscribedCustomers();
        if (res?.success) {
          const rawItems: ApiSubscription[] = res.subscribedProducts;
          const customerMap = new Map<string, CustomerState>();

          rawItems.forEach((item) => {
            const user = item.vendorCustomers.user;
            if (!customerMap.has(user.id)) {
              customerMap.set(user.id, {
                id: user.id,
                name: user.name || "Anonymous",
                phone: user.phone || "No phone",
                address: user.address || "No address provided",
                products: [],
              });
            }
            const customer = customerMap.get(user.id);
            if (
              item.product?.productName &&
              !customer!.products.includes(item.product.productName)
            ) {
              customer!.products.push(item.product.productName);
            }
          });
          setVendorCustomers(Array.from(customerMap.values()));
        } else {
          setError("Failed to retrieve subscription data.");
        }
      } catch (err: any) {
        setError(
          err?.response?.data?.message || err.message || "An unexpected error occurred."
        );
      } finally {
        setLoading(false);
      }
    };

    if (vendorAccount?.id) {
      fetchCustomers();
    } else {
      setLoading(false);
    }
  }, [vendorAccount?.id]);

  const renderCustomerCard = ({ item }: { item: CustomerState }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{item.name.charAt(0).toUpperCase()}</Text>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.customerName} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.customerPhone}>{item.phone}</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Active Subscriptions</Text>
      <View style={styles.badgesContainer}>
        {item.products.map((product, index) => (
          <View key={index} style={styles.badge}>
            <Text style={styles.badgeText}>{product}</Text>
          </View>
        ))}
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.addressLabel}>Delivery Address</Text>
        <Text style={styles.addressValue} numberOfLines={2}>{item.address}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F9" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>
            {vendorCustomers.length} {vendorCustomers.length === 1 ? "Subscriber" : "Subscribers"}
          </Text>
        </View>
      </View>

      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="small" color="#4F46E5" />
          <Text style={styles.loadingText}>Updating live records...</Text>
        </View>
      ) : error ? (
        <View style={styles.centerContainer}>
          <View style={styles.errorIconBox}>
            <Text style={styles.errorIconText}>!</Text>
          </View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <FlatList
          data={vendorCustomers}
          keyExtractor={(item) => item.id}
          renderItem={renderCustomerCard}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.centerContainer}>
              <Text style={styles.emptyText}>No subscribers active today.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F9",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1E1B4B",
    letterSpacing: -0.5,
  },
  counterBadge: {
    backgroundColor: "#EEF2F6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  counterText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#4F46E5",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: "rgba(241, 245, 249, 0.6)",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#EEF2F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#334155",
  },
  headerTextContainer: {
    flex: 1,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0F172A",
    letterSpacing: -0.2,
    marginBottom: 2,
  },
  customerPhone: {
    fontSize: 13,
    fontWeight: "500",
    color: "#64748B",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    gap: 6,
  },
  badge: {
    backgroundColor: "#EEF2F6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },
  addressContainer: {
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 12,
  },
  addressLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 4,
  },
  addressValue: {
    fontSize: 13,
    color: "#334155",
    lineHeight: 18,
    fontWeight: "400",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  loadingText: {
    marginTop: 12,
    color: "#64748B",
    fontSize: 14,
    fontWeight: "500",
  },
  errorIconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FEE2E2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  errorIconText: {
    color: "#EF4444",
    fontSize: 20,
    fontWeight: "700",
  },
  errorText: {
    color: "#64748B",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
  emptyText: {
    color: "#94A3B8",
    fontSize: 15,
    fontWeight: "500",
  },
});
