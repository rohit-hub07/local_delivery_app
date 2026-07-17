import { create } from "zustand"
import { axiosInstance } from "../api/axios"

interface CustomerSubscriptionState {
  subscribedProducts: any[];
  subscribedCustomers: () => Promise<void>;
  error: any
}

export const useCustomerSubscriptionStore = create<CustomerSubscriptionState>()((set) => ({
  subscribedProducts: [],
  error: null,
  subscribedCustomers: async () => {
    try {
      const res = await axiosInstance.get("/subscription/get/customer-subcribed-product")
      if (res.data.success) {
        set({ subscribedProducts: res.data.subscribedProducts })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      set({ error: message });
      throw new Error(message);
    }
  }
}))