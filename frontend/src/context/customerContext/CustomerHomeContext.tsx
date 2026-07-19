import { create } from "zustand"
import { axiosInstance } from "../../api/axios"
import { io, Socket } from "socket.io-client"
import { useCustomerSubscriptionStore } from "../vendorContext/CustomerSubscriptionContex"

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



interface Request {
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

interface RequestApiResponse {
  message: string
  success: boolean
  requestStatus: Request[]
}

interface CustomerHomeState {
  socket: Socket | null,
  initCustomerSocket: (userId: string) => Promise<void>
  getCustomerSubscribedProducts: () => Promise<void>,
  customerRequest: (credential: RequestType) => Promise<void>,
  getAllRequestCustomer: () => Promise<void>,
  unsubcribeProduct: (id: string) => Promise<void>,
  subcribedProducts: SubscribeProductState[],
  requestDetails: Request[]
}

export const useCustomerHomeContext = create<CustomerHomeState>()((set, get) => ({
  socket: null,
  requestDetails: [],
  subcribedProducts: [],
  initCustomerSocket: async (userId: string) => {
    if (get().socket) return
    const socket = io(process.env.EXPO_PUBLIC_BACKEND_URL, {
      transports: ["websocket"],
      autoConnect: true
    })

    // connect to backend socket
    socket.on("connect",() =>{
      socket.emit("join_room",userId)
    })

    socket.on("connect_error", (err) => console.log("Socket error: ", err.message))

    socket.on("vendor_update_response",(updatedRequest: Request ) =>{
      set((state) =>({
        requestDetails: [updatedRequest, ...state.requestDetails]
      }))
    })
    set({ socket });
  },
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
      await get().getAllRequestCustomer()
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  getAllRequestCustomer: async () => {
    try {
      const res = await axiosInstance.get<RequestApiResponse>("/request/request-status")
      if (res.data.success) {
        set({ requestDetails: res.data.requestStatus })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  unsubcribeProduct: async (id: string) => {
    try {
      const res = await axiosInstance.delete(`/subscription/product/unsubscribe-product/${id}`)
      if (res.data.success) {
        await get().getCustomerSubscribedProducts()
        await useCustomerSubscriptionStore.getState().subscribedCustomers()
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  }
}))