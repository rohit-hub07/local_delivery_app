import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  Alert // Imported Alert for displaying inline update errors
} from 'react-native';
// Imported Status enum and updateRequest from your store context
import { useRequestStore, CustomerRequest, Status } from '../../context/RequestContext';

const RequestsScreen = () => {
  const { customerRequests, getCustomerRequests, updateRequest } = useRequestStore();

  // Frontend local UI states
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'PENDING' | 'APPROVED' | 'REJECTED'>('PENDING');

  // Tracks which individual request ID is currently undergoing an API status update
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Unified fetch handler wrapped in useCallback for stability
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await getCustomerRequests();
    } catch (err: any) {
      setError(err.message || "Failed to load requests");
    } finally {
      setLoading(false);
    }
  }, [getCustomerRequests]);

  // Initial fetch on component mount
  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  // Handle action triggers (Acceptance / Rejection)
  const handleAction = async (id: string, targetStatus: Status) => {
    setUpdatingId(id);
    try {
      await updateRequest(id, targetStatus);
    } catch (err: any) {
      Alert.alert("Update Failed", err.message || "Something went wrong while processing.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Fixed: Your useMemo filter condition has been re-aligned to map ACCEPTED responses cleanly into the APPROVED tab layout view
  const categorizedRequests = useMemo(() => {
    return {
      PENDING: customerRequests.filter(req => req.status === 'PENDING'),
      APPROVED: customerRequests.filter(req => req.status === 'ACCEPTED'),
      REJECTED: customerRequests.filter(req => req.status === 'REJECTED'),
    };
  }, [customerRequests]);

  // Get current active data based on selection tab
  const currentData = categorizedRequests[activeTab];

  // Render Item component for FlatList
  const renderRequestItem = ({ item }: { item: CustomerRequest }) => {
    const user = item.vendorCustomers.user;
    const isThisCardUpdating = updatingId === item.id;

    return (
      <View style={styles.card}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userPhone}>📞 {user.phone}</Text>
          <Text style={styles.userAddress}>📍 {user.address}</Text>
        </View>

        <View style={styles.requestDetails}>
          <Text style={styles.typeBadge}>{item.type.toUpperCase()}</Text>
          <Text style={styles.messageText}>"{item.message}"</Text>

          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>Start: {new Date(item.start_date).toLocaleDateString()}</Text>
            <Text style={styles.dateText}>End: {new Date(item.end_date).toLocaleDateString()}</Text>
          </View>

          {item.respondedAt && (
            <Text style={styles.respondedText}>
              Responded: {new Date(item.respondedAt).toLocaleDateString()}
            </Text>
          )}

          {/* Action Row buttons: Visible exclusively inside the PENDING workflow context */}
          {item.status === 'PENDING' && (
            <View style={styles.actionRow}>
              {isThisCardUpdating ? (
                <ActivityIndicator size="small" color="#007AFF" style={styles.actionLoader} />
              ) : (
                <>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.rejectButtonColor]}
                    onPress={() => handleAction(item.id, Status.REJECTED)}
                    disabled={updatingId !== null} // Disables interaction if any card is processing
                  >
                    <Text style={styles.actionButtonText}>Reject</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.actionButton, styles.acceptButtonColor]}
                    onPress={() => handleAction(item.id, Status.ACCEPTED)}
                    disabled={updatingId !== null}
                  >
                    <Text style={styles.actionButtonText}>Accept</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
        </View>
      </View>
    );
  };

  // Full-screen loading indicator for the *very first* fetch only
  if (loading && customerRequests.length === 0) {
    return (
      <View style={[styles.center, styles.container]}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>Fetching Requests...</Text>
      </View>
    );
  }

  if (error && customerRequests.length === 0) {
    return (
      <View style={[styles.center, styles.container]}>
        <Text style={styles.errorText}>⚠️ {error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchRequests}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Tab Navigation Menu */}
      <View style={styles.tabBar}>
        {(['PENDING', 'APPROVED', 'REJECTED'] as const).map((tab) => (
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
            colors={['#007AFF']}
            tintColor="#007AFF"
          />
        }
        ListEmptyComponent={
          <View style={styles.center}>
            <Text style={styles.emptyText}>No {activeTab.toLowerCase()} requests available.</Text>
          </View>
        }
      />
    </View>
  );
};

export default RequestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#D9534F',
    textAlign: 'center',
    marginBottom: 15,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#007AFF',
  },
  tabLabel: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '600',
  },
  activeTabLabel: {
    color: '#007AFF',
    fontWeight: '700',
  },
  listContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  userInfo: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
    paddingBottom: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
    textTransform: 'capitalize',
  },
  userPhone: {
    fontSize: 14,
    color: '#3A3A3C',
    marginTop: 4,
  },
  userAddress: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  requestDetails: {
    marginTop: 4,
  },
  typeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5F1FF',
    color: '#007AFF',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  messageText: {
    fontSize: 15,
    color: '#2C2C2E',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
  },
  dateText: {
    fontSize: 12,
    color: '#636366',
  },
  respondedText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 6,
    textAlign: 'right',
  },
  emptyText: {
    color: '#8E8E93',
    fontSize: 15,
    marginTop: 40,
  },
  /* Added Styles for Action Interface Buttons */
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 14,
    gap: 12,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    minWidth: 85,
    alignItems: 'center',
  },
  acceptButtonColor: {
    backgroundColor: '#34C759', // System Green
  },
  rejectButtonColor: {
    backgroundColor: '#FF3B30', // System Red
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  actionLoader: {
    paddingVertical: 6,
    paddingRight: 10,
  }
});
