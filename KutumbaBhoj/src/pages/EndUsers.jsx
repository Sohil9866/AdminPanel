import Header from "../components/common/Header";
import Table from "../components/Table";
import { endUserStore } from "../store";

const EndUsers = () => {
  const { endUser } = endUserStore();
  const columns = [
    {
      header: "Customer Name",
      accessor: "Name",
    },
    {
      header: "Email",
      accessor: "Email",
    },
    {
      header: "Contact",
      accessor: "Phone",
    },
    {
      header: "Address",
      accessor: "Address",
    }
  ];
  return (
    <div className="rounded-lg shadow-lg w-full bg-white border">
      <div className="px-6 py-5">
        <Header heading="End Users" search={true}/>
      </div>
      <Table
        type="endUser"
        data={endUser}
        columns={columns}
        actions={true}
      />
    </div>
  );
};

export default EndUsers;
