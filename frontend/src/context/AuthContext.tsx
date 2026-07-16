// src/api/auth.api.ts
import { create } from "zustand"
import { axiosInstance } from "../api/axios"

export type LoginTypes = {
  phone: string
}

export type SignupTypes = {
  name: string,
  phone: string,
  role: string,
  address: string
}



interface AuthState {
  user: any | null,
  authUser: () => Promise<any>
  login: (credentials: LoginTypes) => Promise<any>
  signup: (credentials: SignupTypes) => Promise<any>
  logout: () => Promise<any>
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  authUser: async () => {
    try {
      const res = await axiosInstance.get("/auth/me")
      if (res.data.user) {
        set({ user: res.data.user })
      }
      return res.data;
    } catch (error: any) {
      set({ user: null }); // Reset state on error
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Authentication failed";
      throw new Error(message);
    }
  },

  login: async (credentials: LoginTypes) => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        phone: credentials.phone
      })
      if (res.data.user) {
        set({ user: res.data.user })
      }

      return res.data

    } catch (error: any) {
      set({ user: null }); // Reset state on error
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
      throw new Error(message);
    }
  },

  signup: async (credentails: SignupTypes) => {
    try {
      const res = await axiosInstance.post("/auth/signup", {
        name: credentails.name,
        phone: credentails.phone,
        role: credentails.role,
        address: credentails.address
      })

      if (res.data.user) {
        set({ user: res.data.user })
      }
      return res.data
    } catch (error: any) {
      set({ user: null }); // Reset state on error
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Signup failed";
      throw new Error(message);
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("/auth/logout")
      if (res.data.success) {
        set({ user: null })
        return res.data
      }
    } catch (error: any) {
      const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Logout failed";
      throw new Error(message);
    }
  }
}))
