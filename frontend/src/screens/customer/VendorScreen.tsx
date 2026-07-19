import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useCustomerVendorStore } from '../../context/customerContext/CustomerVendorContext';
import ProductScreen from './ProductScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

export const VendorScreen = () => {
  const { getAllVendorProfile, vendorProfiles } = useCustomerVendorStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [isViewingProducts, setIsViewingProducts] = useState<boolean>(false);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        await getAllVendorProfile();
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  // Show the product screen if a vendor profile was clicked
  if (isViewingProducts) {
    return (
      <ProductScreen 
        onBack={() => setIsViewingProducts(false)} 
      />
    );
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>My Vendors</Text>

      {vendorProfiles.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.emptyText}>No connected vendors found.</Text>
        </View>
      ) : (
        <FlatList
          data={vendorProfiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setIsViewingProducts(true)}
              activeOpacity={0.7}
              style={styles.card}
            >
              <Text style={styles.businessName}>{item.businessName}</Text>
              <Text style={styles.businessPhone}>📞 {item.businessPhone}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: '#111827' },
  emptyText: { fontSize: 16, color: '#6B7280' },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  businessName: { fontSize: 18, fontWeight: '600', color: '#1F2937' },
  businessPhone: { fontSize: 14, color: '#6B7280', marginTop: 4 },
});
