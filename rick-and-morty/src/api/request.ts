import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { APICall } from "./utils";

export const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

export const request = ({ ...options }: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: AxiosError) => {
    console.log(error);
  };

  return axiosInstance(options).then(onSuccess).catch(onError);
};

export type { APICall };
