import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://meet-mint-server.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;