import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL, COOKIE_KEYS } from "@/constants/config";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosInstanceWithAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get(COOKIE_KEYS.token)}`,
  },
});
