import { create } from "zustand";
import { axiosInstance } from "../api/axios";

type VenorProfileTypes = {
  businessName: string
  businessPhone: string
}

interface VendorState {
  vendorAccount: any | null,
  hasVendorProfile: boolean,
  vendorProfile: (credentials: VenorProfileTypes) => Promise<any>
  isCreatedVendorProfile: (id: string) => Promise<Boolean>
}


export const useVendorContextStore = create<VendorState>()((set) => ({
  vendorAccount: null,
  hasVendorProfile: false,
  vendorProfile: async (credentials: VenorProfileTypes) => {
    try {
      const res = await axiosInstance.post("/vendor/create/vendor-profile", {
        businessName: credentials.businessName,
        businessPhone: credentials.businessPhone
      })

      if (res.data.profile) {
        set({ vendorAccount: res.data.profile, hasVendorProfile: true })
      }
      return res.data

    } catch (error: any) {
      set({ vendorAccount: null }); // Reset state on error
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      throw new Error(message);
    }
  },

  isCreatedVendorProfile: async (id: string) => {
    try {
      const res = await axiosInstance.get(`/vendor/vendor-profile/${id}`)
      if (res.data?.vendorProfile) {
        set({ hasVendorProfile: true })
      }
      return false
    } catch (error: any) {
      set({ vendorAccount: null }); // Reset state on error
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Error while getting the vendor profile!";
      throw new Error(message);
    }
  }
}))