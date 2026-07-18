import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useVendorCustomerStore } from "../../context/vendorCustomerContext";
import { useCustomerSubscriptionStore } from "../../context/CustomerSubscriptionContex";

const CustomerScreen = () => {
  const { addCustomer, deleteCustomers, allCustomers } =
    useVendorCustomerStore();

  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [addCustomerError, setAddCustomerError] = useState("");
  const { subscribedCustomers } = useCustomerSubscriptionStore()
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await allCustomers();
      await subscribedCustomers();
      if (res?.success) {
        setCustomers(res.customers);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleAddCustomer = async () => {
    if (!phone.trim()) {
      setAddCustomerError("Please enter a phone number.");
      return;
    }

    try {
      setAddCustomerError("");
      const res = await addCustomer(phone);

      if (res?.success) {
        setPhone("");
        setAddCustomerError("");
        setAddModalVisible(false);
        fetchCustomers();
      }
    } catch (err: any) {
      setAddCustomerError(err.message || "Error adding customer");
      console.log(err);
    }
  };

  const handleDelete = (userId: string) => {
    Alert.alert(
      "Remove Customer",
      "Are you sure you want to remove this customer?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            try {
              const res = await deleteCustomers(userId);

              if (res?.success) {
                fetchCustomers();
              }
            } catch (err) {
              console.log(err);
            }
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={fetchCustomers}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No customers found.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.name}>{item.user.name}</Text>
              <Text>{item.user.phone}</Text>
              <Text>{item.user.address}</Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDelete(item.user.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setAddModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal
        visible={addModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Add Customer</Text>

            <TextInput
              placeholder="Enter customer phone number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
            />

            {addCustomerError ? (
              <Text style={styles.errorText}>{addCustomerError}</Text>
            ) : null}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  setPhone("");
                  setAddCustomerError("");
                  setAddModalVisible(false);
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.addBtn}
                onPress={handleAddCustomer}
              >
                <Text style={{ color: "#fff" }}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },

  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  deleteButton: {
    backgroundColor: "#ff4444",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },

  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },

  fab: {
    position: "absolute",
    right: 25,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  fabText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modal: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 20,
  },

  errorText: {
    color: "#d32f2f",
    backgroundColor: "#fdecea",
    borderColor: "#f5c2c7",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontWeight: "600",
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },

  cancelBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#eee",
  },

  addBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#007AFF",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#888",
    fontSize: 16,
  },
});