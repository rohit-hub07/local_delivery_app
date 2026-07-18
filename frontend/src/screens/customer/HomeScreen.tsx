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
  Platform
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useCustomerHomeContext } from "../../context/customerContext/CustomerHomeContext";

export default function HomeScreen() {
  const { getCustomerSubscribedProducts, customerRequest, subcribedProducts } = useCustomerHomeContext();

  // Component UI States
  const [loading, setLoading] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

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
  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    // Hide picker for Android on selection immediately
    if (Platform.OS !== "ios") {
      setShowPicker(false);
    }

    if (event.type === "dismissed" || !selectedDate) {
      return;
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

  if (loading) {
    return (
      <SafeAreaView style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Loading Subscribed Products...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={subcribedProducts}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No subscribed products found.</Text>}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.productDesc}>{item.description}</Text>
            <View style={styles.vendorDivider} />
            <Text style={styles.vendorTitle}>Vendor Information</Text>
            <Text style={styles.vendorDetail}>🏢 Company: {item.vendor.businessName}</Text>
            <Text style={styles.vendorDetail}>📞 Phone: {item.vendor.businessPhone}</Text>
            <TouchableOpacity style={styles.requestButton} onPress={() => handleOpenForm(item.id)}>
              <Text style={styles.requestButtonText}>Request</Text>
            </TouchableOpacity>
          </View>
        )}
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
            <Text style={styles.modalTitle}>New Product Request</Text>

            <Text style={styles.label}>Request Type</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Note, Request"
              value={requestType}
              onChangeText={setRequestType}
            />

            {/* Date Picker Triggers */}
            <Text style={styles.label}>Start Date</Text>
            <TouchableOpacity style={styles.datePickerButton} onPress={() => openDatePicker("start")}>
              <Text style={startDateObj ? styles.dateText : styles.placeholderText}>
                {formatDateString(startDateObj)}
              </Text>
            </TouchableOpacity>

            <Text style={styles.label}>End Date</Text>
            <TouchableOpacity style={styles.datePickerButton} onPress={() => openDatePicker("end")}>
              <Text style={endDateObj ? styles.dateText : styles.placeholderText}>
                {formatDateString(endDateObj)}
              </Text>
            </TouchableOpacity>

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
                onChange={onDateChange}
              />
            )}

            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe your request..."
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
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleRequestSubmit}
                disabled={submitting}
              >
                {submitting ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.submitButtonText}>Submit</Text>
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
  container: { flex: 1, backgroundColor: "#f8f9fa", paddingHorizontal: 16 },
  centerContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  loadingText: { marginTop: 10, color: "#6c757d" },
  headerTitle: { fontSize: 24, fontWeight: "bold", marginVertical: 16, color: "#212529" },
  emptyText: { textAlign: "center", marginTop: 40, color: "#6c757d", fontSize: 16 },
  productCard: { backgroundColor: "#ffffff", padding: 16, borderRadius: 12, marginBottom: 16, elevation: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
  productName: { fontSize: 18, fontWeight: "bold", color: "#007BFF" },
  productDesc: { fontSize: 14, color: "#495057", marginTop: 4, marginBottom: 12 },
  vendorDivider: { height: 1, backgroundColor: "#e9ecef", marginVertical: 8 },
  vendorTitle: { fontSize: 12, fontWeight: "bold", textTransform: "uppercase", color: "#6c757d", marginBottom: 4 }, vendorDetail: { fontSize: 14, color: "#212529", marginBottom: 2 }, requestButton: { backgroundColor: "#007BFF", paddingVertical: 10, borderRadius: 8, marginTop: 12, alignItems: "center" }, requestButtonText: { color: "#ffffff", fontWeight: "bold", fontSize: 16 }, modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 20 }, modalContainer: { backgroundColor: "#ffffff", borderRadius: 16, padding: 20, elevation: 5 }, modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 16, color: "#212529", textAlign: "center" }, label: { fontSize: 14, fontWeight: "600", color: "#495057", marginBottom: 4 }, input: { borderWidth: 1, borderColor: "#ced4da", borderRadius: 8, padding: 10, marginBottom: 12, fontSize: 14, backgroundColor: "#f8f9fa" }, textArea: { height: 80, textAlignVertical: "top" }, datePickerButton: { borderWidth: 1, borderColor: "#ced4da", borderRadius: 8, padding: 12, marginBottom: 12, backgroundColor: "#f8f9fa", justifyContent: "center" },dateText: { fontSize: 14, color: "#212529" },placeholderText: { fontSize: 14, color: "#adb5bd" },modalActionRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8 },modalButton: { flex: 0.48, paddingVertical: 12, borderRadius: 8, alignItems: "center" },cancelButton: { backgroundColor: "#e9ecef" },cancelButtonText: { color: "#495057", fontWeight: "600" },submitButton: { backgroundColor: "#28a745" },submitButtonText: { color: "#ffffff", fontWeight: "600" }});