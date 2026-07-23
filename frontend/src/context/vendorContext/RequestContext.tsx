import { create } from "zustand";
import { axiosInstance } from "../../api/axios";
import { io, Socket } from "socket.io-client"


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
  requestedQuantity?: string | null;
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
  socket: Socket | null,
  initVendorSocket: (vendorId: string) => Promise<void>
  customerRequests: CustomerRequest[];
  getCustomerRequests: () => Promise<void>;
  updateRequest: (id: string, status: Status) => Promise<void>;
  disconnectSocket: () => Promise<void>
}


interface ApiResponse {
  message: string;
  success: boolean;
  requests: CustomerRequest[];
}

export const useRequestStore = create<RequestState>()((set, get) => ({
  socket: null,
  customerRequests: [],
  initVendorSocket: async (vendorId: string) => {
    if (get().socket) return
    const socket = io(process.env.EXPO_PUBLIC_BACKEND_URL, {
      transports: ["websocket"],
      autoConnect: true,
    })

    socket.on("connect", () => {
      socket.emit("join_room", vendorId)
    })

    socket.on("connect_error", (err) => console.log("Socket error: ", err.message))

    socket.on("new_request_created", (newRequest: CustomerRequest) => {
      set((state) => ({
        customerRequests: [newRequest, ...state.customerRequests]
      }))
    })
    set({ socket });
  },
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
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message ??
        error?.response?.data?.error ??
        error.message ??
        "Failed to update request";
      throw new Error(message);
    }
  },
  disconnectSocket: async () => {
    const { socket } = get();

    if (socket) {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("new_request_created");

      socket.disconnect(); // Closes the connection cleanly
      set({ socket: null }); // Resets the store state
      console.log("Socket disconnected cleanly.");
    }
  }
}))

