import { useEffect } from "react";
import DataTable from "../../components/data-table";
import { useAuth } from "../../context/auth-context";
import Wrapper from "../../layouts/wrapper";

export default function WindowSize() {
  const {
    auth: { user },
  } = useAuth();
  const cols = [
    {
      key: "height",
      title: "Высота (м)",
      dataIndex: "height",
      width: 100,
      align: "center",
    },
    {
      key: "width",
      title: "Ширина (м)",
      dataIndex: "width",
      width: 100,
      align: "center",
    },
    {
      key: "width x height",
      title: "Ширина × Высота (м²)",
      render: (e) => `${e.width} x ${e.height} = ${e.width * e.height}`,
      align: "center",
    },
    {
      key: "knvkdsnjv",
      title: "Форма",
      dataIndex: "form",
      align: "center",
      render: (e) => e.name,
    },
  ];

  return (
    <Wrapper title="Размеры окон">
      <DataTable
        columns={cols}
        url={`/w-size/getall${
          user?.role === "tsex-manager" ? "/tsex-manager" : ""
        }`}
        del={`/w-size/delete${
          user?.role === "tsex-manager" ? "/tsex-manager" : ""
        }`}
        edit={`/w-size`}
      />
    </Wrapper>
  );
}
