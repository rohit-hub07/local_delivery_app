import {create} from "zustand"
import { axiosInstance } from "../api/axios"

interface CustomerSubscriptionState{
  subscribedCustomers: () => Promise<any>
}

export const useCustomerSubscribtionStore = create<CustomerSubscriptionState>()((set) =>({
    subscribedCustomers: async() =>{
      try {
        const res = await axiosInstance.get("/subscription/get/customer-subcribed-product")
        console.log("res inside of customer subscriptioN: ", res.data)
        return res.data
      } catch (error: any) {
        const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      throw new Error(message);
      }
    }
}))