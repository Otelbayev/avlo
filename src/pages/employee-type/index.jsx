import DataTable from "../../components/data-table";
import { useAuth } from "../../context/auth-context";
import Wrapper from "../../layouts/wrapper";
import { work_types } from "../../utils/mock";

const columns = [
  {
    key: "name",
    title: "Тип",
    dataIndex: "type",
  },
  {
    key: "age",
    title: "Тип зарплаты",
    dataIndex: "work_type",
    render: (data) => work_types.find((e) => e.value === data).label,
  },
];

export default function EmployeeType() {
  const {
    auth: { user },
  } = useAuth();
  return (
    <Wrapper title="Тип сотрудника">
      <DataTable
        columns={columns}
        url={`/employeetype/getall${
          user.role === "accountant" ? "/accountant" : ""
        }`}
        del={`/employeetype/delete${
          user.role === "accountant" ? "/accountant" : ""
        }`}
        edit="/employee-type"
      />
    </Wrapper>
  );
}
