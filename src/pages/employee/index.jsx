import DataTable from "../../components/data-table";
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
];

export default function Employee() {
  return (
    <Wrapper title="Сотрудники">
      <DataTable
        columns={columns}
        url="/employee"
        del="/employee"
        edit="/employee"
      />
    </Wrapper>
  );
}
