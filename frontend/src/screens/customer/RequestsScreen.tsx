import React, { useEffect, useState, useMemo, useCallback } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  RefreshControl 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCustomerHomeContext } from "../../context/customerContext/CustomerHomeContext";

export default function RequestsScreen() {
  const { requestDetails, getAllRequestCustomer } = useCustomerHomeContext();

  // Frontend local UI states
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"PENDING" | "APPROVED" | "REJECTED">("PENDING");

  // Unified fetch handler wrapped in useCallback for stability
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await getAllRequestCustomer();
    } catch (err: any) {
      setError(err.message || "Failed to load requests");
    } finally {
      setLoading(false);
    }
  }, [getAllRequestCustomer]);

  // Initial fetch on component mount
  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  // Group requests into their respective status columns using store values
  const categorizedRequests = useMemo(() => {
    return {
      PENDING: requestDetails.filter((req) => req.status?.toUpperCase() === "PENDING"),
      APPROVED: requestDetails.filter(
        (req) => req.status?.toUpperCase() === "APPROVED" || req.status?.toUpperCase() === "ACCEPTED"
      ),
      REJECTED: requestDetails.filter(
        (req) => req.status?.toUpperCase() === "REJECTED" || req.status?.toUpperCase() === "DECLINED"
      ),
    };
  }, [requestDetails]);

  // Extract active list based on selection tab
  const currentData = categorizedRequests[activeTab];

  // Helper utility to construct clean display dates
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toLocaleDateString();
  };

  // Render Item component for FlatList
  const renderRequestItem = ({ item }: { item: typeof requestDetails[0] }) => {
    return (
      <View style={styles.card}>
        <View style={styles.requestHeader}>
          <Text style={styles.typeBadge}>{item.type?.toUpperCase() || "REQUEST"}</Text>
          <Text style={styles.requestIdText}>ID: #{item.id?.substring(0, 8)}</Text>
        </View>

        <View style={styles.requestBody}>
          <Text style={styles.messageText}>"{item.message}"</Text>
          
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>📅 Start: {formatDate(item.start_date)}</Text>
            <Text style={styles.dateText}>🏁 End: {formatDate(item.end_date)}</Text>
          </View>

          {item.respondedAt && (
            <Text style={styles.respondedText}>
              🔄 Responded: {formatDate(item.respondedAt)}
            </Text>
          )}
        </View>
      </View>
    );
  };

  // Full-screen loading indicator for the *very first* fetch only
  if (loading && requestDetails.length === 0) {
    return (
      <SafeAreaView style={[styles.center, styles.container]}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Fetching Requests...</Text>
      </SafeAreaView>
    );
  }

  // Error screen with manual retry hook handler
  if (error && requestDetails.length === 0) {
    return (
      <SafeAreaView style={[styles.center, styles.container]}>
        <Text style={styles.errorText}>⚠️ {error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchRequests}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Dynamic Tab Navigation Menu */}
      <View style={styles.tabBar}>
        {(["PENDING", "APPROVED", "REJECTED"] as const).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabLabel, activeTab === tab && styles.activeTabLabel]}>
              {tab} ({categorizedRequests[tab].length})
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Requests Feed */}
      <FlatList
        data={currentData}
        keyExtractor={(item) => item.id}
        renderItem={renderRequestItem}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={fetchRequests}
            colors={["#007AFF"]}
            tintColor="#007AFF"
          />
        }
        ListEmptyComponent={
          <View style={styles.center}>
            <Text style={styles.emptyText}>No {activeTab.toLowerCase()} requests available.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    color: "#D9534F",
    textAlign: "center",
    marginBottom: 15,
  },
  retryButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#007AFF",
  },
  tabLabel: {
    fontSize: 13,
    color: "#8E8E93",
    fontWeight: "600",
  },
  activeTabLabel: {
    color: "#007AFF",
    fontWeight: "700",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  requestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F2F7",
    paddingBottom: 10,
    marginBottom: 10,
  },
  requestIdText: {
    fontSize: 12,
    color: "#8E8E93",
    fontFamily: "System",
  },
  requestBody: {
    marginTop: 4,
  },
  typeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#E5F1FF",
    color: "#007AFF",
    fontSize: 11,
    fontWeight: "700",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
  messageText: {
    fontSize: 15,
    color: "#2C2C2E",
    fontStyle: "italic",
    lineHeight: 20,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F7",
  },
  dateText: {
    fontSize: 12,
    color: "#636366",
  },
  respondedText: {
    fontSize: 12,
    color: "#8E8E93",
    marginTop: 8,
    textAlign: "right",
    fontWeight: "500",
  },
  emptyText: {
    color: "#8E8E93",
    fontSize: 15,
    marginTop: 40,
  },
});
