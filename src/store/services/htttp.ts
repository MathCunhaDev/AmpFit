import axios, { AxiosResponse } from "axios";

export const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

http.interceptors.response.use((response: AxiosResponse) => response.data);
