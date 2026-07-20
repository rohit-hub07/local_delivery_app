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

// Simple, plain-language options so people can tap instead of type.
// "Other" reveals a free-text box for anything not covered above.
const REQUEST_TYPES = [
  { key: "general", label: "General Request" },
  { key: "schedule", label: "Change Delivery Day" },
  { key: "complaint", label: "Complaint / Problem" },
  { key: "other", label: "Something Else" }
];

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
  const [selectedProductName, setSelectedProductName] = useState<string>("");

  // Unsubscribe specific loading state (tracks which card is mid-flight)
  const [unsubscribingId, setUnsubscribingId] = useState<string | null>(null);

  // Form Field States
  const [message, setMessage] = useState<string>("");
  const [requestType, setRequestType] = useState<string>("");
  const [requestTypeKey, setRequestTypeKey] = useState<string>("");

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

  // Utility to safely format JS Date objects to a friendly, readable string
  const formatDateString = (date: Date | null): string => {
    if (!date) return "choose a date";
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // API expects YYYY-MM-DD, kept separate from the friendly display string above
  const formatDateForApi = (date: Date | null): string => {
    if (!date) return "";
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
      Alert.alert("No Phone Number", "This vendor hasn't shared a phone number yet.");
      return;
    }
    const url = `tel:${digits}`;
    Linking.canOpenURL(url)
      .then((ok) => {
        if (ok) {
          Linking.openURL(url);
        } else {
          Alert.alert("Can't Call Right Now", "Your phone can't make this call right now.");
        }
      })
      .catch(() => {
        Alert.alert("Can't Call Right Now", "Something went wrong. Please try again.");
      });
  };

  const handleOpenForm = (productId: string, productName: string) => {
    setSelectedProductId(productId);
    setSelectedProductName(productName);
    setModalVisible(true);
  };

  const closeForm = () => {
    setModalVisible(false);
    setSelectedProductId(null);
    setSelectedProductName("");
    setMessage("");
    setRequestType("");
    setRequestTypeKey("");
    setStartDateObj(null);
    setEndDateObj(null);
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
        Alert.alert("That Date Has Passed", "Please choose today or a date in the future.");
        return;
      }
      setStartDateObj(chosenDate);

      // Auto-invalidate matching End Dates that break chronological lines
      if (endDateObj && chosenDate > endDateObj) {
        setEndDateObj(null);
      }
    } else {
      if (!startDateObj) {
        Alert.alert("Choose Start Date First", "Please pick a Start Date before the End Date.");
        return;
      }
      if (chosenDate < startDateObj) {
        Alert.alert("Date Problem", "End Date cannot be before Start Date.");
        return;
      }
      setEndDateObj(chosenDate);
    }
  };

  // Pick a preset request type (or reveal free text for "Something Else")
  const handleSelectRequestType = (key: string, label: string) => {
    setRequestTypeKey(key);
    if (key === "other") {
      setRequestType("");
    } else {
      setRequestType(label);
    }
  };

  // Submit form data out to your API engine
  const handleRequestSubmit = async () => {
    if (!requestTypeKey) {
      Alert.alert("Missing Info", "Please choose what kind of request this is.");
      return;
    }
    if (requestTypeKey === "other" && !requestType.trim()) {
      Alert.alert("Missing Info", "Please tell us what you need.");
      return;
    }
    if (!startDateObj || !endDateObj) {
      Alert.alert("Missing Info", "Please choose a Start Date and an End Date.");
      return;
    }
    if (!selectedProductId) {
      Alert.alert("Missing Info", "Please select a product first.");
      return;
    }

    setSubmitting(true);
    try {
      await customerRequest({
        productId: selectedProductId,
        message,
        type: requestType,
        start_date: formatDateForApi(startDateObj),
        end_date: formatDateForApi(endDateObj)
      });

      Alert.alert("Request Sent", "Your request has been sent. The vendor will get back to you soon.");
      closeForm();
    } catch (error: any) {
      Alert.alert("Could Not Send", error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Confirm + perform unsubscribe for a given product
  const handleUnsubscribe = (productId: string, productName: string) => {
    Alert.alert(
      "Stop This Service?",
      `Are you sure you want to stop "${productName}"? You will not get this service anymore.`,
      [
        { text: "No, Keep It", style: "cancel" },
        {
          text: "Yes, Stop It",
          style: "destructive",
          onPress: async () => {
            setUnsubscribingId(productId);
            try {
              await unsubcribeProduct(productId);
            } catch (error: any) {
              Alert.alert("Error", error.message || "Could not stop the service. Please try again.");
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
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.loadingText}>Loading your services…</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Services</Text>
        <Text style={styles.headerSubtitle}>
          You have {subcribedProducts.length} active {subcribedProducts.length === 1 ? "service" : "services"}
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
            <Text style={styles.emptyTitle}>No Services Yet</Text>
            <Text style={styles.emptyText}>
              When you join a service, it will show up here.
            </Text>
          </View>
        }
        renderItem={({ item }) => {
          const isUnsubscribing = unsubscribingId === item.id;
          return (
            <View style={styles.productCard}>
              <View style={styles.cardTopRow}>
                <Text style={styles.productName}>{item.productName}</Text>
                <View style={styles.activeBadge}>
                  <View style={styles.activeDot} />
                  <Text style={styles.activeBadgeText}>Running</Text>
                </View>
              </View>

              <Text style={styles.productDesc}>{item.description}</Text>

              <View style={styles.vendorDivider} />

              <View style={styles.vendorRow}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{getInitials(item.vendor.businessName)}</Text>
                </View>
                <View style={styles.vendorInfo}>
                  <Text style={styles.vendorLabel}>Delivered by</Text>
                  <Text style={styles.vendorName}>{item.vendor.businessName}</Text>
                  <Text style={styles.vendorDetail}>{item.vendor.businessPhone}</Text>
                </View>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => callVendor(item.vendor.businessPhone)}
                  activeOpacity={0.75}
                >
                  <Text style={styles.callButtonIcon}>📞</Text>
                  <Text style={styles.callButtonText}>Call</Text>
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
                    <>
                      <Text style={styles.unsubscribeButtonIcon}>✕</Text>
                      <Text style={styles.unsubscribeButtonText}>Stop Service</Text>
                    </>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.requestButton]}
                  onPress={() => handleOpenForm(item.id, item.productName)}
                  disabled={isUnsubscribing}
                  activeOpacity={0.8}
                >
                  <Text style={styles.requestButtonIcon}>✉️</Text>
                  <Text style={styles.requestButtonText}>Ask Vendor</Text>
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
        onRequestClose={closeForm}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Send a Request</Text>
            <Text style={styles.modalSubtitle}>For: {selectedProductName}</Text>

            <Text style={styles.label}>1. What do you need?</Text>
            <View style={styles.chipWrap}>
              {REQUEST_TYPES.map((opt) => {
                const isSelected = requestTypeKey === opt.key;
                return (
                  <TouchableOpacity
                    key={opt.key}
                    style={[styles.chip, isSelected && styles.chipSelected]}
                    onPress={() => handleSelectRequestType(opt.key, opt.label)}
                    activeOpacity={0.8}
                  >
                    <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                      {opt.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {requestTypeKey === "other" && (
              <TextInput
                style={styles.input}
                placeholder="Type what you need here"
                placeholderTextColor="#9CA3AF"
                value={requestType}
                onChangeText={setRequestType}
              />
            )}

            <Text style={styles.label}>2. Choose your dates</Text>
            <View style={styles.dateRow}>
              <View style={styles.dateColumn}>
                <Text style={styles.dateColumnLabel}>Start Date</Text>
                <TouchableOpacity style={styles.datePickerButton} onPress={() => openDatePicker("start")} activeOpacity={0.8}>
                  <Text style={styles.datePickerIcon}>📅</Text>
                  <Text style={startDateObj ? styles.dateText : styles.placeholderText}>
                    {formatDateString(startDateObj)}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.dateColumn}>
                <Text style={styles.dateColumnLabel}>End Date</Text>
                <TouchableOpacity style={styles.datePickerButton} onPress={() => openDatePicker("end")} activeOpacity={0.8}>
                  <Text style={styles.datePickerIcon}>📅</Text>
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

            <Text style={styles.label}>3. Add a note (Explain your request breifly)</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Write any extra details here"
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              value={message}
              onChangeText={setMessage}
            />

            <View style={styles.modalActionRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={closeForm}
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
                  <Text style={styles.submitButtonText}>Send Request</Text>
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
  container: { flex: 1, backgroundColor: "#F4F6FB" },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F4F6FB" },
  loadingText: { marginTop: 12, color: "#4B5563", fontSize: 16, fontWeight: "600" },

  header: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18 },
  headerTitle: { fontSize: 30, fontWeight: "800", color: "#0F172A", letterSpacing: -0.5 },
  headerSubtitle: { fontSize: 16, color: "#475569", marginTop: 4, fontWeight: "600" },

  listContent: { paddingHorizontal: 20, paddingBottom: 24, flexGrow: 1 },

  emptyContainer: { alignItems: "center", justifyContent: "center", marginTop: 80, paddingHorizontal: 32 },
  emptyIconCircle: {
    width: 84, height: 84, borderRadius: 42, backgroundColor: "#E7ECFB",
    alignItems: "center", justifyContent: "center", marginBottom: 18
  },
  emptyIconText: { fontSize: 36 },
  emptyTitle: { fontSize: 20, fontWeight: "800", color: "#0F172A", marginBottom: 6 },
  emptyText: { textAlign: "center", color: "#475569", fontSize: 16, lineHeight: 22 },

  productCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 18,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 14,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#EEF1F8"
  },
  cardTopRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  productName: { fontSize: 20, fontWeight: "800", color: "#0F172A", flexShrink: 1, marginRight: 8 },

  activeBadge: {
    flexDirection: "row", alignItems: "center", backgroundColor: "#DCFCE7",
    paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20
  },
  activeDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#16A34A", marginRight: 6 },
  activeBadgeText: { fontSize: 13, fontWeight: "800", color: "#15803D" },

  productDesc: { fontSize: 15, color: "#475569", marginTop: 8, lineHeight: 21 },

  vendorDivider: { height: 1, backgroundColor: "#EEF1F8", marginVertical: 16 },

  vendorRow: { flexDirection: "row", alignItems: "center" },
  avatarCircle: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: "#2563EB",
    alignItems: "center", justifyContent: "center", marginRight: 14
  },
  avatarText: { color: "#FFFFFF", fontWeight: "800", fontSize: 16 },
  vendorInfo: { flex: 1 },
  vendorLabel: { fontSize: 12, color: "#94A3B8", fontWeight: "700", textTransform: "uppercase", letterSpacing: 0.3 },
  vendorName: { fontSize: 16, fontWeight: "700", color: "#0F172A", marginTop: 1 },
  vendorDetail: { fontSize: 14, color: "#64748B", marginTop: 2 },

  callButton: {
    width: 60, height: 52, borderRadius: 14,
    backgroundColor: "#DCFCE7",
    borderWidth: 1.5, borderColor: "#BBF7D0",
    alignItems: "center", justifyContent: "center",
    marginLeft: 8
  },
  callButtonIcon: { fontSize: 18 },
  callButtonText: { fontSize: 11, fontWeight: "800", color: "#15803D", marginTop: 1 },

  actionRow: { flexDirection: "row", marginTop: 18, gap: 12 },
  actionButton: {
    flex: 1, flexDirection: "row", paddingVertical: 15, borderRadius: 14,
    alignItems: "center", justifyContent: "center", gap: 6
  },
  unsubscribeButton: { backgroundColor: "#FEF2F2", borderWidth: 1.5, borderColor: "#FECACA" },
  unsubscribeButtonIcon: { color: "#DC2626", fontWeight: "800", fontSize: 14 },
  unsubscribeButtonText: { color: "#DC2626", fontWeight: "800", fontSize: 15 },
  requestButton: {
    backgroundColor: "#2563EB",
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3
  },
  requestButtonIcon: { fontSize: 15 },
  requestButtonText: { color: "#FFFFFF", fontWeight: "800", fontSize: 15 },

  modalOverlay: { flex: 1, backgroundColor: "rgba(15,23,42,0.6)", justifyContent: "flex-end" },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    paddingBottom: 34,
    maxHeight: "88%"
  },
  modalHandle: {
    width: 44, height: 5, borderRadius: 3, backgroundColor: "#E2E8F0",
    alignSelf: "center", marginBottom: 18
  },
  modalTitle: { fontSize: 22, fontWeight: "800", color: "#0F172A", textAlign: "center" },
  modalSubtitle: { fontSize: 15, color: "#2563EB", fontWeight: "700", textAlign: "center", marginTop: 4, marginBottom: 22 },

  label: { fontSize: 16, fontWeight: "800", color: "#1E293B", marginBottom: 10 },
  input: {
    borderWidth: 1.5, borderColor: "#E2E8F0", borderRadius: 14, padding: 14,
    marginBottom: 16, fontSize: 16, backgroundColor: "#F8FAFC", color: "#0F172A"
  },
  textArea: { height: 100, textAlignVertical: "top" },

  chipWrap: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 18 },
  chip: {
    paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12,
    backgroundColor: "#F1F5F9", borderWidth: 1.5, borderColor: "#E2E8F0"
  },
  chipSelected: { backgroundColor: "#DBEAFE", borderColor: "#2563EB" },
  chipText: { fontSize: 15, fontWeight: "700", color: "#475569" },
  chipTextSelected: { color: "#1D4ED8" },

  dateRow: { flexDirection: "row", gap: 12 },
  dateColumn: { flex: 1 },
  dateColumnLabel: { fontSize: 13, fontWeight: "700", color: "#64748B", marginBottom: 6 },
  datePickerButton: {
    flexDirection: "row", alignItems: "center", gap: 8,
    borderWidth: 1.5, borderColor: "#E2E8F0", borderRadius: 14, padding: 14,
    marginBottom: 16, backgroundColor: "#F8FAFC"
  },
  datePickerIcon: { fontSize: 16 },
  dateText: { fontSize: 15, color: "#0F172A", fontWeight: "700" },
  placeholderText: { fontSize: 14, color: "#94A3B8", fontWeight: "600" },

  modalActionRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10, gap: 12 },
  modalButton: { flex: 1, paddingVertical: 16, borderRadius: 14, alignItems: "center" },
  cancelButton: { backgroundColor: "#F1F5F9" },
  cancelButtonText: { color: "#334155", fontWeight: "800", fontSize: 15 },
  submitButton: {
    backgroundColor: "#2563EB",
    shadowColor: "#2563EB",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3
  },
  submitButtonText: { color: "#FFFFFF", fontWeight: "800", fontSize: 15 }
});