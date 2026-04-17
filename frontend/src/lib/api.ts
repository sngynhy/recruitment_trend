import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api/v1",
  headers: { "Content-Type": "application/json" },
  timeout: 30_000,
});

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("[API Error]", error.response?.data ?? error.message);
    return Promise.reject(error);
  }
);
