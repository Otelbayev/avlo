import DataTable from "../../components/data-table";
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
  return (
    <Wrapper title="Тип сотрудника">
      <DataTable
        columns={columns}
        url="/employeetype"
        del="/employeetype"
        edit="/employee-type"
        status
      />
    </Wrapper>
  );
}
