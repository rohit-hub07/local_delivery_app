import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useCustomerVendorStore } from '../../context/customerContext/CustomerVendorContext';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ProductScreenProps {
  onBack: () => void;
}

const ProductScreen = ({ onBack }: ProductScreenProps) => {
  // 1. Pull the clean-up action from your store
  const { getAllVendorProducts, vendorProducts, clearVendorProducts } = useCustomerVendorStore();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getAllVendorProducts();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();

    // 2. This clean-up function runs AUTOMATICALLY when ProductScreen closes
    return () => {
      clearVendorProducts();
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 3. Your manual back button interaction is now completely safe */}
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Back to Vendors</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>Products</Text>

      {vendorProducts.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>No products listed for this vendor.</Text>
        </View>
      ) : (
        <FlatList
          data={vendorProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  backButton: { marginBottom: 16, alignSelf: 'flex-start' },
  backButtonText: { color: '#4F46E5', fontSize: 16, fontWeight: '600' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#111827' },
  emptyText: { fontSize: 16, color: '#6B7280' },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  productName: { fontSize: 18, fontWeight: '600', color: '#1F2937' },
  productDescription: { fontSize: 14, color: '#4B5563', marginTop: 4 },
});

export default ProductScreen;
