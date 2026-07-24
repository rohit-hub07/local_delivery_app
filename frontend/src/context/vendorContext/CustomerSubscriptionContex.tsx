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

export interface CalendarDayType {
  date: string
  dayNumber: number
  monthNumber: number
  year: number
  isCurrentMonth: boolean
  quantity: string
  isDelivered: boolean
  isSkipped: boolean
  isUpcoming: boolean
  requestType: string | null
  requestId: string | null
}

interface VendorCalendarApiResponse {
  message: string
  success: boolean
  calendar: CalendarDayType[]
  month: number
  year: number
}

interface VendorCustomerSubscriptionsResponse {
  message: string
  success: boolean
  subscribedProducts: VendorSubscribedProduct[]
}

interface VendorStatsResponse {
  message: string
  success: boolean
  stats: {
    totalDeliveredQuantity: string
    receivedDays: number
    skippedDays: number
  }
}

interface CustomerSubscriptionState {
  subscribedProducts: VendorSubscribedProduct[];
  subscribedCustomers: () => Promise<void>;
  calendar: CalendarDayType[];
  calendarLoading: boolean;
  currentCalendarMonth: number;
  currentCalendarYear: number;
  fetchVendorCalendar: (subscriptionId: string, month?: number, year?: number) => Promise<void>;
  fetchCustomerSubscriptions: (customerId: string) => Promise<VendorSubscribedProduct[]>;
  fetchVendorSubscriptionStats: (subscriptionId: string) => Promise<{ totalDeliveredQuantity: string; receivedDays: number; skippedDays: number } | null>;
  error: any
}

export const useCustomerSubscriptionStore = create<CustomerSubscriptionState>()((set, get) => ({
  subscribedProducts: [],
  error: null,
  calendar: [],
  calendarLoading: false,
  currentCalendarMonth: new Date().getMonth() + 1,
  currentCalendarYear: new Date().getFullYear(),

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
  },

  fetchVendorCalendar: async (subscriptionId: string, month?: number, year?: number) => {
    const now = new Date()
    const targetMonth = month ?? now.getMonth() + 1
    const targetYear = year ?? now.getFullYear()

    set({ calendarLoading: true, currentCalendarMonth: targetMonth, currentCalendarYear: targetYear })
    try {
      const res = await axiosInstance.get<VendorCalendarApiResponse>(`/subscription/vendor/calendar/${subscriptionId}`, {
        params: { month: targetMonth, year: targetYear }
      })
      if (res.data.success) {
        set({ calendar: res.data.calendar })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Failed to load calendar"
      throw new Error(message)
    } finally {
      set({ calendarLoading: false })
    }
  },

  fetchCustomerSubscriptions: async (customerId: string) => {
    try {
      const res = await axiosInstance.get<VendorCustomerSubscriptionsResponse>(`/subscription/get/vendor/customer-subscriptions/${customerId}`)
      if (res.data.success) {
        return res.data.subscribedProducts
      }
      return []
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Failed to load customer subscriptions"
      throw new Error(message)
    }
  },

  fetchVendorSubscriptionStats: async (subscriptionId: string) => {
    try {
      const res = await axiosInstance.get<VendorStatsResponse>(`/subscription/vendor/stats/${subscriptionId}`)
      if (res.data.success) {
        return res.data.stats
      }
      return null
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Failed to load subscription stats"
      throw new Error(message)
    }
  }
}))