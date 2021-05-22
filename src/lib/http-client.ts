import axios, { AxiosError } from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Date.now() * Math.random();
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

const isHttpError = axios.isAxiosError;

export type { AxiosError as HttpError };
export { axiosInstance as httpClient, isHttpError };
