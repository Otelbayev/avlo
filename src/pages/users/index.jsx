import DataTable from "../../components/data-table";
import Wrapper from "../../layouts/wrapper";
import { roles } from "../../utils/mock";

const columns = [
  {
    key: "name",
    title: "Логин",
    dataIndex: "login",
  },
  {
    key: "employee",
    title: "Сотрудник",
    dataIndex: "employee",
    render: (e) => `${e?.surname}  ${e?.name}  ${e?.patronymic}`,
  },
  {
    key: "age",
    title: "Роль",
    dataIndex: "role",
    render: (data) => roles.find((e) => e.value === data)?.label,
  },
];

export default function Users() {
  return (
    <Wrapper title="Пользователи">
      <DataTable
        columns={columns}
        url="/user/getall"
        del="/user/delete"
        edit="/users"
      />
    </Wrapper>
  );
}
