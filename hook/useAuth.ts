import { create } from "zustand";
import Cookies from "js-cookie";

import { axiosInstance } from "@/lib/axios";
import { COOKIE_KEYS } from "@/constants/config";
import type { AuthState } from "@/types";

const useAuthStore = create<AuthState>((set) => ({
  data: null,
  getUser: async () => {
    try {
      const getCookie = Cookies.get(COOKIE_KEYS.token);

      if (!getCookie) return set({ data: null });

      const response = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${getCookie}`,
        },
      });

      set({ data: response.data });
    } catch (error) {
      set({ data: null });
      Cookies.remove(COOKIE_KEYS.token);
    }
  },
  logoutHandler: () => {
    window.location.href = "/";
    set({ data: null });
    Cookies.remove(COOKIE_KEYS.token);
  },
}));

export default useAuthStore;
