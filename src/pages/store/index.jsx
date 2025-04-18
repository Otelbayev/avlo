import Wrapper from "../../layouts/wrapper";
import DataTable from "../../components/data-table";
import { dimensions } from "../../utils/mock";
import { useAuth } from "../../context/auth-context";
import dayjs from "dayjs";
import { useState } from "react";
import { Flex } from "antd";

export default function Store() {
  const {
    auth: { user },
  } = useAuth();
  const [sum, setSum] = useState(0);

  const columns = [
    {
      key: "1",
      title: "Название",
      dataIndex: "store_type",
      render: (data) => data?.name,
    },
    {
      key: "2",
      title: "Количество",
      render: (data) =>
        `${data.count} ${
          dimensions.find((e) => e.value === data.store_type?.type)?.label
        }`,
    },
    {
      key: "3",
      title: "Дата",
      dataIndex: "date",
      render: (type) => dayjs(type).format("DD.MM.YYYY"),
    },
    {
      key: "4",
      dataIndex: "price",
      title: "Цена (сум)",
      render: (value) =>
        value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    },
  ];

  return (
    <>
      <Wrapper title={"Склад"}>
        <Flex>
          <b>Общая сумма</b>:{" "}
          {sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} сум
        </Flex>
        <br />
        <DataTable
          columns={columns}
          url={`/store/getall${
            user?.role === "storekeeper" ? "/storekeeper" : ""
          }`}
          del={`/store/delete${
            user?.role === "storekeeper" ? "/storekeeper" : ""
          }`}
          edit="/store"
          setSum={setSum}
        />
      </Wrapper>
    </>
  );
}
