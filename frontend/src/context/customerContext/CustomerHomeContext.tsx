import { create } from "zustand"
import { axiosInstance } from "../../api/axios"

interface VendorState {
  id: string
  userId: string
  businessName: string
  businessPhone: string
}


interface SubscribeProductState {
  id: string
  vendorId: string
  productName: string
  description: string
  vendor: VendorState
}

interface subscribeProductApiresponse {
  message: string
  success: boolean
  subscribeProduct: SubscribeProductState[]
}


interface RequestType {
  start_date: string,
  end_date: string,
  message: string,
  type: string,
  productId: string
}



interface Request{
  id: string
  vendorCustomerId: string
  productId: string
  type: string
  message: string
  start_date: string
  end_date: string
  status: string
  respondedAt: string
  createdAt: string
  updatedAt: string
}

interface RequestApiResponse{
  message: string
  success: boolean
  requestStatus: Request[]
}

interface CustomerHomeState {
  getCustomerSubscribedProducts: () => Promise<void>,
  customerRequest: (credential: RequestType) => Promise<void>,
  getAllRequestCustomer: () => Promise<void>,
  subcribedProducts: SubscribeProductState[],
  requestDetails: Request[]
}

export const useCustomerHomeContext = create<CustomerHomeState>()((set) => ({
  requestDetails: [],
  subcribedProducts: [],
  getCustomerSubscribedProducts: async () => {
    try {
      const res = await axiosInstance.get<subscribeProductApiresponse>("/subscription/get/subscribed-product")
      if (res.data.success) {
        set({ subcribedProducts: res.data.subscribeProduct })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  customerRequest: async (credential: RequestType) => {
    try {
      await axiosInstance.post("/request/new-request", {
        start_date: credential.start_date,
        end_date: credential.end_date,
        message: credential.message,
        type: credential.type,
        productId: credential.productId
      })
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  getAllRequestCustomer: async() =>{
    try {
      const res = await axiosInstance.get<RequestApiResponse>("/request/request-status")
      if(res.data.success){
        set({requestDetails: res.data.requestStatus})
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  }
}))