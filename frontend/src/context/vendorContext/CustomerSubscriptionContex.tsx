import { create } from "zustand"
import { axiosInstance } from "../../api/axios"

export interface VendorSubscribedProduct {
  id: string
  vendorCustomerId: string
  productId: string
  dailyQuantity: string
  startDate: string
  createdAt: string
  updatedAt: string
  product: {
    id: string
    vendorId: string
    productName: string
    description: string
    unit: string
    createdAt: string
    updatedAt: string
  }
  vendorCustomers: {
    id: string
    vendorId: string
    customerId: string
    customerPhone: string
    createdAt: string
    updatedAt: string
    user: {
      id: string
      name: string
      phone: string
      address: string
      role: string
      createdAt: string
      updatedAt: string
    }
  }
}

interface CustomerSubscriptionState {
  subscribedProducts: VendorSubscribedProduct[];
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