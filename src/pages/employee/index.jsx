import DataTable from "../../components/data-table";
import { useAuth } from "../../context/auth-context";
import Wrapper from "../../layouts/wrapper";
import { work_types } from "../../utils/mock";

const columns = [
  {
    key: "name",
    title: "Ф.И.О",
    render: (data) => `${data.surname} ${data.name} ${data.patronymic}`,
  },
  {
    key: "age",
    title: "Тип сотрудника",
    dataIndex: "employee_type_id",
    render: (data) => data?.type,
  },
  {
    key: "salary",
    title: "Тип зарплаты",
    dataIndex: "employee_type_id",
    render: (data) =>
      work_types.find((e) => e.value === data?.work_type)?.label,
  },
  {
    key: "salary1",
    title: "Зарплаты (сум)",
    dataIndex: "salary",
    render: (value) => value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  },
];

export default function Employee() {
  const {
    auth: { user },
  } = useAuth();
  return (
    <Wrapper title="Сотрудники">
      <DataTable
        columns={columns}
        url={`/employee/getall${
          user?.role === "accountant" ? "/accountant" : ""
        }`}
        del={`/employee/delete${
          user?.role === "accountant" ? "/accountant" : ""
        }`}
        edit="/employee"
      />
    </Wrapper>
  );
}
