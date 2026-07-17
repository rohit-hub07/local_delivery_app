import { create } from "zustand";
import { axiosInstance } from "../api/axios";


interface CustomerUser {
  id: string;
  name: string;
  phone: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

// 2. Define the Request Object Type (matching backend response schema)
export interface CustomerRequest {
  id: string;
  vendorCustomerId: string;
  productId: string;
  type: string;
  message: string;
  start_date: string;
  end_date: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  respondedAt: string | null;
  createdAt: string;
  updatedAt: string;
  vendorCustomers: {
    user: CustomerUser;
  };
}


interface RequestState{
  customerRequests : CustomerRequest[];
  getCustomerRequests: () =>Promise<void>
}

interface ApiResponse {
  message: string;
  success: boolean;
  requests: CustomerRequest[];
}

export const useRequestStore = create<RequestState>()((set) =>({
  customerRequests: [],
  getCustomerRequests: async() =>{
    try {
      const res = await axiosInstance.get<ApiResponse>("request/all-requests");
      if(res.data.success){
        set({customerRequests: res.data.requests})
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  }
}))