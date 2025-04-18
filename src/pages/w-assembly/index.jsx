import DataTable from "../../components/data-table";
import { useAuth } from "../../context/auth-context";
import Wrapper from "../../layouts/wrapper";

export default function WindowAssembly() {
  const {
    auth: { user },
  } = useAuth();

  const cols = [
    {
      key: "1",
      title: "Размер окна",
      dataIndex: "window",
      render: (data) => `${data.width} x ${data.height}`,
    },
    {
      key: "1",
      title: "Форма",
      dataIndex: "window",
      render: (data) => data?.form?.name,
    },
    {
      key: "2",
      title: "Сотрудники",
      dataIndex: "employees",
      render: (data) => data?.map((e) => `${e?.name} ${e?.surname}`).join(", "),
    },
  ];

  return (
    <>
      <Wrapper title="Сборка окон">
        <DataTable
          columns={cols}
          url={`/w-assembly/getall${
            user?.role === "tsex-manager" ? "/tsex-manager" : ""
          }`}
          del={`/w-assembly/delete${
            user?.role === "tsex-manager" ? "/tsex-manager" : ""
          }`}
          edit="/w-assembly"
        />
      </Wrapper>
    </>
  );
}
