import { create } from "zustand";
import { FetchAPI } from "../api/fetchApi";

const api = new FetchAPI();
const endUserStore = create((set) => ({
  endUser: [],
  loading: false,
  error: null,
  getEndUser: async () => {
    set({ loading: true, error: null });
    const response = await api.get("/customers");
    if (response.error) {
      set({ loading: false, error: response.error.message });
    } else {
      set({ endUser: response.data, loading: false, error: null });
    }
  },
}));

export default endUserStore;
