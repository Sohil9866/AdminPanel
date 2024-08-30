import { create } from "zustand";
import { FetchAPI } from "../api/fetchApi";
const api = new FetchAPI();
const employeeStore = create((set) => ({
  employees: [],
  loading: false,
  error: null,
  getEmployees: async () => {
    set({ loading: true, error: null });
    const response = await api.get("/employee");
    if (response.error) {
      set({ loading: false, error: response.error.message });
    } else {
      set({ employees: response.data, loading: false, error: null });
    }
  }}))

  export default employeeStore;