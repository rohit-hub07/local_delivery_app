import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Alert,
  RefreshControl
} from 'react-native';
import { useCustomerVendorStore } from '../../context/customerContext/CustomerVendorContext';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProductScreenProps {
  vendorId: string;
  onBack: () => void;
}

const ProductScreen = ({ vendorId, onBack }: ProductScreenProps) => {
  const { getAllVendorProducts, vendorProducts, clearVendorProducts, subscribeProduct } = useCustomerVendorStore();

  const [loading, setLoading] = useState<boolean>(true);

  // Simplified single-step modal state logic
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [subscribing, setSubscribing] = useState<boolean>(false);
  const [subscribedIds, setSubscribedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        await getAllVendorProducts(vendorId);
      } catch (error: any) {
        Alert.alert('Error', error.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    return () => {
      clearVendorProducts();
    };
  }, [vendorId]);

  const getInitials = (name: string): string => {
    if (!name) return '?';
    const parts = name.trim().split(' ').filter(Boolean);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const initiateSubscriptionFlow = (productId: string) => {
    setSelectedProductId(productId);
    setIsConfirmOpen(true);
  };

  const executeSubscription = async () => {
    if (!selectedProductId) return;

    setSubscribing(true);
    try {
      await subscribeProduct(selectedProductId);
      setSubscribedIds((prev) => new Set(prev).add(selectedProductId));
      Alert.alert('Success', 'You have successfully subscribed to this product!');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Failed to subscribe. Please try again.');
    } finally {
      setSubscribing(false);
      cancelSubscriptionFlow();
    }
  };

  const cancelSubscriptionFlow = () => {
    setIsConfirmOpen(false);
    setSelectedProductId(null);
  };

  const activeProduct = vendorProducts.find((p) => p.id === selectedProductId);

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Loading products…</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.7}>
          <Text style={styles.backButtonIcon}>←</Text>
          <Text style={styles.backButtonText}>Vendors</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Products</Text>
        <Text style={styles.headerSubtitle}>
          {vendorProducts.length} {vendorProducts.length === 1 ? 'product' : 'products'} available
        </Text>
      </View>

      <FlatList
        data={vendorProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconCircle}>
              <Text style={styles.emptyIconText}>🗂️</Text>
            </View>
            <Text style={styles.emptyTitle}>No products yet</Text>
            <Text style={styles.emptyText}>This vendor hasn't listed any products.</Text>
          </View>
        }
        renderItem={({ item }) => {
          const isSubscribed = subscribedIds.has(item.id);
          return (
            <View style={styles.productCard}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>{getInitials(item.productName)}</Text>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productDescription} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
              <TouchableOpacity
                style={[styles.subscribeButton, isSubscribed && styles.subscribedButton]}
                onPress={() => initiateSubscriptionFlow(item.id)}
                disabled={isSubscribed}
                activeOpacity={0.85}
              >
                <Text style={[styles.subscribeButtonText, isSubscribed && styles.subscribedButtonText]}>
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* --- SINGLE CONFIRMATION MODAL --- */}
      <Modal
        visible={isConfirmOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelSubscriptionFlow}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalIconCircle}>
              <Text style={styles.modalIconText}>✓</Text>
            </View>
            <Text style={styles.modalTitle}>Confirm Subscription</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to subscribe to{' '}
              <Text style={styles.modalMessageBold}>{activeProduct?.productName}</Text>?
            </Text>

            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelBtn]}
                onPress={cancelSubscriptionFlow}
                disabled={subscribing}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmBtn]}
                onPress={executeSubscription}
                disabled={subscribing}
                activeOpacity={0.85}
              >
                {subscribing ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.confirmBtnText}>Confirm</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F6FA' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F6FA' },
  loadingText: { marginTop: 12, color: '#6B7280', fontSize: 14, fontWeight: '500' },

  header: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 },
  backButton: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginBottom: 10 },
  backButtonIcon: { fontSize: 16, color: '#6366F1', marginRight: 4, fontWeight: '700' },
  backButtonText: { color: '#6366F1', fontSize: 15, fontWeight: '600' },
  headerTitle: { fontSize: 26, fontWeight: '800', color: '#111827', letterSpacing: -0.5 },
  headerSubtitle: { fontSize: 14, color: '#6B7280', marginTop: 2, fontWeight: '500' },

  listContent: { paddingHorizontal: 20, paddingBottom: 24, flexGrow: 1 },

  emptyContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 80, paddingHorizontal: 32 },
  emptyIconCircle: {
    width: 72, height: 72, borderRadius: 36, backgroundColor: '#EEF0FB',
    alignItems: 'center', justifyContent: 'center', marginBottom: 16
  },
  emptyIconText: { fontSize: 30 },
  emptyTitle: { fontSize: 17, fontWeight: '700', color: '#111827', marginBottom: 4 },
  emptyText: { textAlign: 'center', color: '#6B7280', fontSize: 14, lineHeight: 20 },

  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#F0F1F5'
  },
  avatarCircle: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: '#6366F1',
    alignItems: 'center', justifyContent: 'center', marginRight: 12
  },
  avatarText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  productInfo: { flex: 1, paddingRight: 10 },
  productName: { fontSize: 16, fontWeight: '700', color: '#111827' },
  productDescription: { fontSize: 13, color: '#6B7280', marginTop: 2, lineHeight: 18 },

  subscribeButton: {
    backgroundColor: '#6366F1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2
  },
  subscribeButtonText: { color: '#FFFFFF', fontWeight: '700', fontSize: 13 },
  subscribedButton: {
    backgroundColor: '#ECFDF5',
    borderWidth: 1,
    borderColor: '#D1FAE5',
    shadowOpacity: 0,
    elevation: 0
  },
  subscribedButtonText: { color: '#059669' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(17,24,39,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6
  },
  modalIconCircle: {
    width: 52, height: 52, borderRadius: 26, backgroundColor: '#EEF0FB',
    alignItems: 'center', justifyContent: 'center', marginBottom: 14
  },
  modalIconText: { fontSize: 22, color: '#6366F1', fontWeight: '800' },
  modalTitle: { fontSize: 19, fontWeight: '800', marginBottom: 8, color: '#111827' },
  modalMessage: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 22, lineHeight: 21 },
  modalMessageBold: { fontWeight: '700', color: '#111827' },
  modalButtonContainer: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', gap: 12 },
  modalButton: { flex: 1, paddingVertical: 13, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  cancelBtn: { borderWidth: 1.5, borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' },
  confirmBtn: {
    backgroundColor: '#6366F1',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3
  },
  cancelBtnText: { color: '#374151', fontWeight: '700', fontSize: 14 },
  confirmBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
});

export default ProductScreen;