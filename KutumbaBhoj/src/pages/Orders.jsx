import Header from "../components/common/Header";
import Table from "../components/Table";
import { orderStore } from "../store";
const Orders = () => {
  const {orders} = orderStore();
  const columns = [
    {
      header: "Order Id",
      accessor: "Id",
    },
    {
      header: "Restaurant",
      accessor: "Restaurant",
    },
    {
      header: "Total",
      accessor: "Total",
    },
    {
      header: "Payment",
      accessor: "Payment",
    },
    {
      header: "Created",
      accessor: "CreatedAt",
    },
    {
      header: "Status",
      accessor: "Status",
    },
  ];
  return (
    <div className="rounded-lg shadow-lg w-full bg-white border">
      <div className="px-6 py-5">
      <Header heading="Orders" btnName="Filters" filter={true}  />
      </div>
      <Table columns={columns} data={orders} type="order"/>
    </div>
  );
};

export default Orders;
