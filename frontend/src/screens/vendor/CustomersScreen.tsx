import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useVendorCustomerStore } from "../../context/vendorContext/vendorCustomerContext";
import { useCustomerSubscriptionStore } from "../../context/vendorContext/CustomerSubscriptionContex";

const AVATAR_COLORS = [
  { bg: "#E1F5EE", text: "#085041" },
  { bg: "#FAECE7", text: "#712B13" },
  { bg: "#E6F1FB", text: "#0C447C" },
  { bg: "#FBEAF0", text: "#72243E" },
];

const getInitial = (name?: string) => (name?.trim()?.[0] || "?").toUpperCase();
const getAvatarColor = (id: string) => {
  const sum = id
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return AVATAR_COLORS[sum % AVATAR_COLORS.length];
};

const CustomerScreen = () => {
  const { addCustomer, deleteCustomers, allCustomers } =
    useVendorCustomerStore();

  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [addCustomerError, setAddCustomerError] = useState("");
  const { subscribedCustomers } = useCustomerSubscriptionStore();

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

    // 1. Remove spaces, hyphens, brackets, and periods
    // let normalizedNumber = phone.trim().replace(/[\s\-().]/g, "");

    // 2. Automatically strip "+91" or "91" if present at the start
    // if (normalizedNumber.startsWith("+91")) {
    //   normalizedNumber = normalizedNumber.slice(3);
    // } else if (normalizedNumber.startsWith("91") && normalizedNumber.length > 10) {
    //   normalizedNumber = normalizedNumber.slice(2);
    // }

    // 3. Validate that it is exactly a 10-digit Indian phone number
    // const phoneRegex = /^[6-9]\d{9}$/;

    // if (!phoneRegex.test(normalizedNumber)) {
    //   Alert.alert("Invalid Phone Number", "Please enter a valid 10-digit number.");
    //   return;
    // }

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
      "Remove customer",
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

  const handleCall = (phoneNumber: string) => {
    if (!phoneNumber) return;
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const filteredCustomers = useMemo(() => {
    if (!search.trim()) return customers;
    const q = search.trim().toLowerCase();
    return customers.filter(
      (item) =>
        item.user?.name?.toLowerCase().includes(q) ||
        item.user?.phone?.toLowerCase().includes(q)
    );
  }, [search, customers]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Customers</Text>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>{customers.length}</Text>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <Feather name="search" size={18} color="#9A9990" style={styles.searchIcon} />
        <TextInput
          placeholder="Search by name or phone"
          placeholderTextColor="#9A9990"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => item.user.id}
        refreshing={loading}
        onRefresh={fetchCustomers}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <View style={styles.emptyWrap}>
            <Feather name="users" size={32} color="#B4B2A9" />
            <Text style={styles.emptyText}>No customers found.</Text>
          </View>
        }
        renderItem={({ item }) => {
          const avatar = getAvatarColor(item.user.id);
          return (
            <View style={styles.card}>
              <View
                style={[styles.avatar, { backgroundColor: avatar.bg }]}
              >
                <Text style={[styles.avatarText, { color: avatar.text }]}>
                  {getInitial(item.user.name)}
                </Text>
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.name} numberOfLines={1}>
                  {item.user.name}
                </Text>
                <Text style={styles.phone} numberOfLines={1}>
                  {item.user.phone}
                </Text>
                {!!item.user.address && (
                  <View style={styles.addressRow}>
                    <Feather name="map-pin" size={13} color="#888780" />
                    <Text style={styles.address} numberOfLines={1}>
                      {item.user.address}
                    </Text>
                  </View>
                )}
              </View>

              <TouchableOpacity
                style={styles.callButton}
                onPress={() => handleCall(item.user.phone)}
                accessibilityLabel={`Call ${item.user.name}`}
              >
                <Feather name="phone" size={18} color="#185FA5" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item.user.id)}
                accessibilityLabel={`Delete ${item.user.name}`}
              >
                <Feather name="trash-2" size={18} color="#A32D2D" />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setAddModalVisible(true)}
        accessibilityLabel="Add customer"
      >
        <Feather name="plus" size={28} color="#fff" />
      </TouchableOpacity>

      <Modal
        visible={addModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setAddModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Add customer</Text>
            <Text style={styles.modalSubtitle}>
              Enter the customer's phone number to add them.
            </Text>

            <TextInput
              placeholder="Phone number"
              placeholderTextColor="#9A9990"
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
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.addBtn}
                onPress={handleAddCustomer}
              >
                <Text style={styles.addBtnText}>Add customer</Text>
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
    paddingHorizontal: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 16,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1A1A18",
  },

  headerBadge: {
    backgroundColor: "#E6F1FB",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 32,
    alignItems: "center",
  },

  headerBadgeText: {
    color: "#0C447C",
    fontWeight: "700",
    fontSize: 14,
  },

  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1EFE8",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 16,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#1A1A18",
  },

  card: {
    backgroundColor: "#FAFAF8",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EDEBE3",
    padding: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  avatarText: {
    fontSize: 18,
    fontWeight: "700",
  },

  cardBody: {
    flex: 1,
    marginRight: 8,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1A1A18",
    marginBottom: 2,
  },

  phone: {
    fontSize: 14,
    color: "#5F5E5A",
    marginBottom: 3,
  },

  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  address: {
    fontSize: 13,
    color: "#888780",
    flexShrink: 1,
  },

  callButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E6F1FB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  deleteButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FCEBEB",
    alignItems: "center",
    justifyContent: "center",
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 28,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#2F6FED",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(20,20,18,0.55)",
    paddingHorizontal: 24,
  },

  modal: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 22,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A18",
    marginBottom: 4,
  },

  modalSubtitle: {
    fontSize: 14,
    color: "#5F5E5A",
    marginBottom: 18,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DAD8CE",
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 15,
    marginBottom: 16,
    color: "#1A1A18",
  },

  errorText: {
    color: "#A32D2D",
    backgroundColor: "#FCEBEB",
    borderColor: "#F09595",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontWeight: "600",
    fontSize: 13,
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },

  cancelBtn: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#F1EFE8",
  },

  cancelBtnText: {
    color: "#1A1A18",
    fontWeight: "600",
  },

  addBtn: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#2F6FED",
  },

  addBtnText: {
    color: "#fff",
    fontWeight: "600",
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
});