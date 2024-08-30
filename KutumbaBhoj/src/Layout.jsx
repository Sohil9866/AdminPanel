import { Outlet } from "react-router-dom";
import SideNav from "./components/SideNav";
import { useEffect } from "react";
import { employeeStore, orderStore, endUserStore } from "./store";
const Layout = () => {
  useEffect(()=>{
    orderStore.getState().getOrders();
    employeeStore.getState().getEmployees();
    endUserStore.getState().getEndUser();
  })
  return (
    <>
      <SideNav />
      <main className="ml-[290px] p-3 max-w-[calc(100vw-290px)] bg-[#F3F2F7] min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
