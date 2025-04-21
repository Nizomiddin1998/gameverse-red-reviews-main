import { getUser } from "@/utils/user";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const request: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const user = getUser();
    if (user) {
      config.headers.Authorization = `Bearer ${user}`;
    }
    return config;
  }
);

export { request };
