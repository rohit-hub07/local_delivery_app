import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Platform,
  Linking
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, { DateTimePickerChangeEvent } from "@react-native-community/datetimepicker";
import { useCustomerHomeContext } from "../../context/customerContext/CustomerHomeContext";

export default function HomeScreen() {
  const {
    getCustomerSubscribedProducts,
    customerRequest,
    unsubcribeProduct,
    subcribedProducts
  } = useCustomerHomeContext();

  // Component UI States
  const [loading, setLoading] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Unsubscribe specific loading state (tracks which card is mid-flight)
  const [unsubscribingId, setUnsubscribingId] = useState<string | null>(null);

  // Form Field States
  const [message, setMessage] = useState<string>("");
  const [requestType, setRequestType] = useState<string>("");

  // Date Picker Specific States
  const [startDateObj, setStartDateObj] = useState<Date | null>(null);
  const [endDateObj, setEndDateObj] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [pickerMode, setPickerMode] = useState<"start" | "end">("start");

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        await getCustomerSubscribedProducts();
      } catch (error: any) {
        Alert.alert("Error", error.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Utility to safely format JS Date objects to YYYY-MM-DD strings
  const formatDateString = (date: Date | null): string => {
    if (!date) return "Select Date";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getInitials = (name: string): string => {
    if (!name) return "?";
    const parts = name.trim().split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  // Dial a vendor's phone number using the device's native dialer
  const callVendor = (phone: string) => {
    const digits = (phone || "").replace(/\D/g, "");
    if (!digits) {
      Alert.alert("No Phone Number", "This vendor hasn't provided a contact number.");
      return;
    }
    const url = `tel:${digits}`;
    Linking.canOpenURL(url)
      .then((ok) => {
        if (ok) {
          Linking.openURL(url);
        } else {
          Alert.alert("Unable to Call", "Your device can't place this call right now.");
        }
      })
      .catch(() => {
        Alert.alert("Unable to Call", "Something went wrong trying to place the call.");
      });
  };

  const handleOpenForm = (productId: string) => {
    setSelectedProductId(productId);
    setModalVisible(true);
  };

  // Open the native platform calendar modal
  const openDatePicker = (mode: "start" | "end") => {
    setPickerMode(mode);
    setShowPicker(true);
  };

  // Process selected dates safely
  const onDateChange = (_event: DateTimePickerChangeEvent, selectedDate: Date) => {
    // Hide picker for Android on selection immediately
    if (Platform.OS !== "ios") {
      setShowPicker(false);
    }

    // Modern baseline comparison (removes precise microsecond deltas)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const chosenDate = new Date(selectedDate);
    chosenDate.setHours(0, 0, 0, 0);

    if (pickerMode === "start") {
      if (chosenDate < today) {
        Alert.alert("Invalid Date", "Start date cannot be in the past.");
        return;
      }
      setStartDateObj(chosenDate);

      // Auto-invalidate matching End Dates that break chronological lines
      if (endDateObj && chosenDate > endDateObj) {
        setEndDateObj(null);
      }
    } else {
      if (!startDateObj) {
        Alert.alert("Validation Sequence", "Please pick a Start Date first.");
        return;
      }
      if (chosenDate < startDateObj) {
        Alert.alert("Invalid Date", "End date cannot be earlier than the start date.");
        return;
      }
      setEndDateObj(chosenDate);
    }
  };

  // Submit form data out to your API engine
  const handleRequestSubmit = async () => {
    if (!message || !requestType || !startDateObj || !endDateObj || !selectedProductId) {
      Alert.alert("Validation Error", "Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    try {
      await customerRequest({
        productId: selectedProductId,
        message,
        type: requestType,
        start_date: formatDateString(startDateObj),
        end_date: formatDateString(endDateObj)
      });

      Alert.alert("Success", "Your request has been submitted successfully!");

      // Complete state sanitization reset
      setMessage("");
      setRequestType("");
      setStartDateObj(null);
      setEndDateObj(null);
      setModalVisible(false);
      setSelectedProductId(null);
    } catch (error: any) {
      Alert.alert("Submission Failed", error.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  // Confirm + perform unsubscribe for a given product
  const handleUnsubscribe = (productId: string, productName: string) => {
    Alert.alert(
      "Unsubscribe",
      `Are you sure you want to unsubscribe from "${productName}"? This action cannot be undone.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Unsubscribe",
          style: "destructive",
          onPress: async () => {
            setUnsubscribingId(productId);
            try {
              await unsubcribeProduct(productId);
            } catch (error: any) {
              Alert.alert("Error", error.message || "Failed to unsubscribe. Please try again.");
            } finally {
              setUnsubscribingId(null);
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Loading your subscriptions…</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Subscriptions</Text>
        <Text style={styles.headerSubtitle}>
          {subcribedProducts.length} active {subcribedProducts.length === 1 ? "product" : "products"}
        </Text>
      </View>

      <FlatList
        data={subcribedProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconCircle}>
              <Text style={styles.emptyIconText}>📦</Text>
            </View>
            <Text style={styles.emptyTitle}>No subscriptions yet</Text>
            <Text style={styles.emptyText}>
              Products you subscribe to will show up here.
            </Text>
          </View>
        }
        renderItem={({ item }) => {
          const isUnsubscribing = unsubscribingId === item.id;
          return (
            <View style={styles.productCard}>
              <View style={styles.cardTopRow}>
                <View style={styles.productTitleBlock}>
                  <Text style={styles.productName}>{item.productName}</Text>
                  <View style={styles.activeBadge}>
                    <View style={styles.activeDot} />
                    <Text style={styles.activeBadgeText}>Active</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.productDesc}>{item.description}</Text>

              <View style={styles.vendorDivider} />

              <View style={styles.vendorRow}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{getInitials(item.vendor.businessName)}</Text>
                </View>
                <View style={styles.vendorInfo}>
                  <Text style={styles.vendorName}>{item.vendor.businessName}</Text>
                  <Text style={styles.vendorDetail}>{item.vendor.businessPhone}</Text>
                </View>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => callVendor(item.vendor.businessPhone)}
                  activeOpacity={0.75}
                >
                  <Text style={styles.callButtonIcon}>📞</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.unsubscribeButton]}
                  onPress={() => handleUnsubscribe(item.id, item.productName)}
                  disabled={isUnsubscribing}
                  activeOpacity={0.7}
                >
                  {isUnsubscribing ? (
                    <ActivityIndicator size="small" color="#DC2626" />
                  ) : (
                    <Text style={styles.unsubscribeButtonText}>Unsubscribe</Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.requestButton]}
                  onPress={() => handleOpenForm(item.id)}
                  disabled={isUnsubscribing}
                  activeOpacity={0.8}
                >
                  <Text style={styles.requestButtonText}>Request</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      {/* Popup Form Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>New Product Request</Text>
            <Text style={styles.modalSubtitle}>Fill in the details below to send your request.</Text>

            <Text style={styles.label}>Request Type</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Note, Request"
              placeholderTextColor="#adb5bd"
              value={requestType}
              onChangeText={setRequestType}
            />

            {/* Date Picker Triggers */}
            <View style={styles.dateRow}>
              <View style={styles.dateColumn}>
                <Text style={styles.label}>Start Date</Text>
                <TouchableOpacity style={styles.datePickerButton} onPress={() => openDatePicker("start")}>
                  <Text style={startDateObj ? styles.dateText : styles.placeholderText}>
                    {formatDateString(startDateObj)}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateColumn}>
                <Text style={styles.label}>End Date</Text>
                <TouchableOpacity style={styles.datePickerButton} onPress={() => openDatePicker("end")}>
                  <Text style={endDateObj ? styles.dateText : styles.placeholderText}>
                    {formatDateString(endDateObj)}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Native Date Picker Engine Injection */}
            {showPicker && (
              <DateTimePicker
                value={
                  pickerMode === "start"
                    ? (startDateObj || new Date())
                    : (endDateObj || startDateObj || new Date())
                }
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                minimumDate={pickerMode === "end" && startDateObj ? startDateObj : new Date()}
                onValueChange={onDateChange}
              />
            )}

            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your request..."
              placeholderTextColor="#adb5bd"
              multiline
              numberOfLines={4}
              value={message}
              onChangeText={setMessage}
            />

            <View style={styles.modalActionRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
                disabled={submitting}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleRequestSubmit}
                disabled={submitting}
                activeOpacity={0.85}
              >
                {submitting ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.submitButtonText}>Submit Request</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6FA" },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F5F6FA" },
  loadingText: { marginTop: 12, color: "#6B7280", fontSize: 14, fontWeight: "500" },

  header: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 16 },
  headerTitle: { fontSize: 26, fontWeight: "800", color: "#111827", letterSpacing: -0.5 },
  headerSubtitle: { fontSize: 14, color: "#6B7280", marginTop: 2, fontWeight: "500" },

  listContent: { paddingHorizontal: 20, paddingBottom: 24, flexGrow: 1 },

  emptyContainer: { alignItems: "center", justifyContent: "center", marginTop: 80, paddingHorizontal: 32 },
  emptyIconCircle: {
    width: 72, height: 72, borderRadius: 36, backgroundColor: "#EEF0FB",
    alignItems: "center", justifyContent: "center", marginBottom: 16
  },
  emptyIconText: { fontSize: 30 },
  emptyTitle: { fontSize: 17, fontWeight: "700", color: "#111827", marginBottom: 4 },
  emptyText: { textAlign: "center", color: "#6B7280", fontSize: 14, lineHeight: 20 },

  productCard: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F0F1F5"
  },
  cardTopRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  productTitleBlock: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", flex: 1 },
  productName: { fontSize: 17, fontWeight: "700", color: "#111827", flexShrink: 1, marginRight: 8 },

  activeBadge: {
    flexDirection: "row", alignItems: "center", backgroundColor: "#ECFDF5",
    paddingHorizontal: 8, paddingVertical: 4, borderRadius: 20
  },
  activeDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#10B981", marginRight: 5 },
  activeBadgeText: { fontSize: 11, fontWeight: "700", color: "#059669" },

  productDesc: { fontSize: 14, color: "#6B7280", marginTop: 6, lineHeight: 20 },

  vendorDivider: { height: 1, backgroundColor: "#F0F1F5", marginVertical: 14 },

  vendorRow: { flexDirection: "row", alignItems: "center" },
  avatarCircle: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: "#6366F1",
    alignItems: "center", justifyContent: "center", marginRight: 12
  },
  avatarText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },
  vendorInfo: { flex: 1 },
  vendorName: { fontSize: 14, fontWeight: "600", color: "#111827" },
  vendorDetail: { fontSize: 13, color: "#6B7280", marginTop: 2 },

  callButton: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: "#ECFDF5",
    borderWidth: 1, borderColor: "#D1FAE5",
    alignItems: "center", justifyContent: "center",
    marginLeft: 8
  },
  callButtonIcon: { fontSize: 16 },

  actionRow: { flexDirection: "row", marginTop: 16, gap: 10 },
  actionButton: {
    flex: 1, paddingVertical: 12, borderRadius: 12, alignItems: "center", justifyContent: "center"
  },
  unsubscribeButton: { backgroundColor: "#FEF2F2", borderWidth: 1, borderColor: "#FECACA" },
  unsubscribeButtonText: { color: "#DC2626", fontWeight: "700", fontSize: 14 },
  requestButton: {
    backgroundColor: "#6366F1",
    shadowColor: "#6366F1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3
  },
  requestButtonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 },

  modalOverlay: { flex: 1, backgroundColor: "rgba(17,24,39,0.55)", justifyContent: "flex-end" },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 32
  },
  modalHandle: {
    width: 40, height: 4, borderRadius: 2, backgroundColor: "#E5E7EB",
    alignSelf: "center", marginBottom: 16
  },
  modalTitle: { fontSize: 20, fontWeight: "800", color: "#111827", textAlign: "center" },
  modalSubtitle: { fontSize: 13, color: "#6B7280", textAlign: "center", marginTop: 4, marginBottom: 20 },

  label: { fontSize: 13, fontWeight: "700", color: "#374151", marginBottom: 6 },
  input: {
    borderWidth: 1.5, borderColor: "#E5E7EB", borderRadius: 12, padding: 12,
    marginBottom: 14, fontSize: 14, backgroundColor: "#F9FAFB", color: "#111827"
  },
  textArea: { height: 90, textAlignVertical: "top" },

  dateRow: { flexDirection: "row", gap: 12 },
  dateColumn: { flex: 1 },
  datePickerButton: {
    borderWidth: 1.5, borderColor: "#E5E7EB", borderRadius: 12, padding: 12,
    marginBottom: 14, backgroundColor: "#F9FAFB", justifyContent: "center"
  },
  dateText: { fontSize: 14, color: "#111827", fontWeight: "500" },
  placeholderText: { fontSize: 14, color: "#9CA3AF" },

  modalActionRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8, gap: 12 },
  modalButton: { flex: 1, paddingVertical: 14, borderRadius: 12, alignItems: "center" },
  cancelButton: { backgroundColor: "#F3F4F6" },
  cancelButtonText: { color: "#374151", fontWeight: "700", fontSize: 14 },
  submitButton: {
    backgroundColor: "#6366F1",
    shadowColor: "#6366F1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3
  },
  submitButtonText: { color: "#FFFFFF", fontWeight: "700", fontSize: 14 }
});