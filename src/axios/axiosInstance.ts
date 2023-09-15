import axios, { AxiosInstance } from "axios";
import { getCookie } from "../utils/CookieUtils";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8181/blog-be",
  timeout: 5000,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
