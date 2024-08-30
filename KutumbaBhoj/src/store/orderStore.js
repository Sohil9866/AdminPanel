import { create } from "zustand";
import { FetchAPI } from "../api/fetchApi";
const api = new FetchAPI();
const orderStore = create((set) => ({
  orders: [],
  order: null,
  loading: false,
  error: null,
  getOrders: async () => {
    set({ loading: true, error: null });
    const response = await api.get("/orders");
    if (response.error) {
      set({ loading: false, error: response.error.message });
    } else {
      set({ orders: response.data, loading: false, error: null });
    }
  },
  getOrder: async (id) => {
    set({ loading: true, error: null });
    const response = await api.get(`/orders/${id}`);
    if (response.error) {
      set({ loading: false, error: response.error.message });
    } else {
      set({ order: response.data, loading: false, error: null });
    }
  },
}));

export default orderStore;
