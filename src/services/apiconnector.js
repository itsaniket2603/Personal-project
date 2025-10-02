import axios from "axios";

// Base axios instance
export const axiosInstance = axios.create({
  baseURL: "https://study-notion-backend-7.onrender.com/api/v1",
  withCredentials: true, // enables cookie support
});

// Modified apiConnector function
export const apiConnector = (method, url, bodyData = null, extraHeaders = {}, params = null) => {
  // Try to fetch token from localStorage
  const token = localStorage.getItem("token");

  return axiosInstance({
    method: method,
    url: url,
    data: bodyData,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...extraHeaders,
    },
    params: params,
  });
};
