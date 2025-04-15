import { Image } from "antd";
import DataTable from "../../components/data-table";
import { useAuth } from "../../context/auth-context";
import Wrapper from "../../layouts/wrapper";

export default function WindowForm() {
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
      title: "Изображение",
      dataIndex: "img",
      align: "center",
      render: (img) =>
        img ? (
          <Image
            style={{ width: "100px" }}
            src={`${import.meta.env.VITE_IMG_API}/uploads/${img}`}
          />
        ) : null,
    },
  ];

  return (
    <Wrapper title={"Форма окна"}>
      <DataTable
        columns={columns}
        url={`/w-form/getall${
          user?.role === "tsex-manager" ? "/tsex-manager" : ""
        }`}
        del={`/w-form/delete${
          user?.role === "tsex-manager" ? "/tsex-manager" : ""
        }`}
        edit="/w-form"
      />
    </Wrapper>
  );
}
