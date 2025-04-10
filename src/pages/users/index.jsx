import { Card } from "antd";
import DataTable from "../../components/data-table";

const columns = [
  {
    key: "name",
    title: "Логин",
    dataIndex: "login",
  },
  {
    key: "age",
    title: "Роль",
    dataIndex: "role",
  },
];

export default function Users() {
  return (
    <Card title="Пользователи">
      <DataTable columns={columns} url="/user/getall" />
    </Card>
  );
}
