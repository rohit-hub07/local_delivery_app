import { create } from "zustand";
import { axiosInstance } from "../../api/axios";
import { useCustomerHomeContext } from "../customerContext/CustomerHomeContext";


interface CustomerUser {
  id: string;
  name: string;
  phone: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}
// get all request response interface
export interface CustomerRequest {
  id: string;
  vendorCustomerId: string;
  productId: string;
  type: string;
  message: string;
  start_date: string;
  end_date: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED";
  respondedAt: string | null;
  createdAt: string;
  updatedAt: string;
  vendorCustomers: {
    user: CustomerUser;
  };
}

// for request updation
interface UpdateResponse {
  message: string;
  success: boolean;
}

export enum Status {
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

interface RequestState {
  customerRequests: CustomerRequest[];
  getCustomerRequests: () => Promise<void>;
  updateRequest: (id: string, status: Status) => Promise<void>;
}


interface ApiResponse {
  message: string;
  success: boolean;
  requests: CustomerRequest[];
}

export const useRequestStore = create<RequestState>()((set, get) => ({
  customerRequests: [],
  getCustomerRequests: async () => {
    try {
      const res = await axiosInstance.get<ApiResponse>("request/all-requests");
      if (res.data.success) {
        set({ customerRequests: res.data.requests })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  updateRequest: async (id: string, status: Status) => {
    try {
      const res = await axiosInstance.put<UpdateResponse>(`request/update-request/${id}`, { status })
      if (res.data.success) {
        await get().getCustomerRequests()
        await useCustomerHomeContext.getState().getAllRequestCustomer()
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message ??
        error?.response?.data?.error ??
        error.message ??
        "Failed to update request";
      throw new Error(message);
    }
  }
}))

