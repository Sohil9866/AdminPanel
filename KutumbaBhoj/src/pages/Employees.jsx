import Header from "../components/common/Header";
import Table from "../components/Table";
import { employeeStore } from "../store";


const Employees = () =>  {
    const {employees} = employeeStore();
    const columns = [
      {
        header: "Employee Name",
        accessor: "Name",
      },
      {
        header: "Contact",
        accessor: "Contact",
      },
      {
        header: "Gender",
        accessor: "Gender",
      },
      {
        header: "Designation",
        accessor: "Designation",
      },
      {
        header: "Shift",
        accessor: "Shift",
      },
      {
        header: "Joined",
        accessor: "Joined",
      },
    ];
    return (
      <div className="rounded-lg shadow-lg w-full bg-white border">
        <div className="px-6 py-5">
          <Header heading="All Employees" search={true} path={true} />
        </div>
        <Table type="employee" data={employees} columns={columns} actions={true}/>
      </div>
    );
}

export default Employees;