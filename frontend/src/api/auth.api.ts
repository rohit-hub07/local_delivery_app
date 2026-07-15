// src/api/auth.api.ts
import axiosInstance from './axios';

export const loginUser = async (name: string, phone: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', { name, phone });
    // console.log("response: ", response)

    return response.data;
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error?.response?.data?.error ?? error.message ?? "Login failed";
    
    throw new Error(message);
  }
};
