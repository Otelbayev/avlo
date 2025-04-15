import Wrapper from "../../layouts/wrapper";
import DataTable from "../../components/data-table";
import { dimensions } from "../../utils/mock";
import { useAuth } from "../../context/auth-context";

export default function Store() {
  const {
    auth: { user },
  } = useAuth();

  const columns = [
    {
      key: "1",
      title: "Название",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Тип",
      dataIndex: "type",
      render: (type) => dimensions.find((e) => e.value === type)?.label,
    },
  ];

  return (
    <Wrapper title={"Тип Материалы"}>
      <DataTable
        columns={columns}
        url={`/storetype/getall${
          user?.role === "storekeeper" ? "/storekeeper" : ""
        }`}
        del={`/storetype/delete${
          user?.role === "storekeeper" ? "/storekeeper" : ""
        }`}
        edit="/store-type"
      />
    </Wrapper>
  );
}
