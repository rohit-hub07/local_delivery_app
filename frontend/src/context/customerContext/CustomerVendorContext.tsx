import { create } from "zustand"
import { AxiosInstance } from "axios"
import { axiosInstance } from "../../api/axios"

// one api to fetch vendor profile

// one api to show the products of vendor using their id

export interface VendorType {
  id: string
  userId: string
  businessName: string
  businessPhone: string
}


interface VendorProductsTypes {
  id: string
  vendorId: string
  productName: string
  description: string
  vendor: VendorType
}

interface VendorProfileState {
  id: string,
  userId: string,
  businessName: string,
  businessPhone: string,
}

interface VendorProfileApiResponse {
  message: string,
  success: boolean,
  allVendorProfile: VendorProfileState[]
}

interface CustomerVendorState {
  vendorProducts: VendorProductsTypes[]
  vendorProfiles: VendorProfileState[]
  getAllVendorProducts: () => Promise<void>
  getAllVendorProfile: () => Promise<void>
  clearVendorProducts: () => void;
}

interface VendorProductApiResponse {
  message: string
  success: boolean
  vendorProducts: VendorProductsTypes[]
}

export const useCustomerVendorStore = create<CustomerVendorState>()((set) => ({
  vendorProducts: [],
  vendorProfiles: [],
  getAllVendorProducts: async () => {
    try {
      const res = await axiosInstance.get<VendorProductApiResponse>("/product/vendor-products");
      if (res.data.success) {
        set({ vendorProducts: res.data.vendorProducts })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  getAllVendorProfile: async () => {
    try {
      const res = await axiosInstance.get<VendorProfileApiResponse>("/vendor/customer/vendor-profile")
      if (res.data.success) {
        set({ vendorProfiles: res.data.allVendorProfile })
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Something went wrong";
      throw new Error(message);
    }
  },
  clearVendorProducts: () => set({ vendorProducts: [] })
}))