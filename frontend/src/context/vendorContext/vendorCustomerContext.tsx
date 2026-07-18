import { create } from "zustand";
import { axiosInstance } from "../../api/axios";
import { useCustomerSubscriptionStore } from "./CustomerSubscriptionContex";

interface VendorCustomerState {
  addCustomer: (phone: string) => Promise<any>
  deleteCustomers: (id: string) => Promise<any>
  allCustomers: () => Promise<any>
}

export const useVendorCustomerStore = create<VendorCustomerState>()((set) => ({
  addCustomer: async (phone: string) => {
    try {
      const res = await axiosInstance.post("/customer/add-customer", { customerPhone: phone })
      return res.data
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      throw new Error(message);
    }
  },
  deleteCustomers: async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/customer/remove-customer/${id}`)
      await useCustomerSubscriptionStore.getState().subscribedCustomers()
      return res.data
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      throw new Error(message);
    }
  },
  allCustomers: async () => {
    try {
      const res = await axiosInstance.get("/customer/all-customers")
      return res.data
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      throw new Error(message);
    }
  }
}))