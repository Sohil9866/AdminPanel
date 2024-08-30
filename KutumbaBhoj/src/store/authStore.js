import { FetchAPI } from "../api/fetchApi";
import { create } from "zustand";

const api = new FetchAPI();

const authStore = create((set, get) => ({
  loading: false,
  error: null,
  setToken: (token) => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  },
  login: async (input) => {
    set({ loading: true, error: null });
    const response = await api.post("/Logins", input);
    if (response.error) {
      set({ loading: false, error: response.error.message });
    } else if (response.data) {
      const { token } = await response.data;
      authStore.getState().setToken(token);
      set({ loading: false, error: null });
    } else {
      set({ loading: false, error: null });
    }
  },
  signup: async (data) => {
    set({ loading: true, error: null });
    const response = await api.post("/customers", data);
    if (response.error) {
      set({ loading: false, error: response.error?.message });
    } else {
      set({ loading: false, error: "Unexpected Error" });
    }
  },
  logout: async () => {
    set({ loading: true });
    await get().setToken();
    set({ loading: false });
  },
}));

export default authStore;
