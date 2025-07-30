import { BACKEND_BASE_URL } from "@/config/server.config";
import axios from "axios";

const api = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
