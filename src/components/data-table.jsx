import { Badge, Button, Flex, Popconfirm, Table } from "antd";
import { Edit, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import axios from "axios";

export default function DataTable({ columns, url }) {
  const { token, user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_BASE_API}${url}`, {
          headers: { Authorization: token },
        });

        if (res.status === 200) {
          const mappedData = res.data.map((item, index) => ({
            index: index + 1,
            key: item.id || index,
            ...item,
          }));
          setData(mappedData);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, [token, url]);

  const renderActions = () => (
    <Flex justify="center" gap={3}>
      <Button type="primary" icon={<Edit size={15} />} />
      <Popconfirm
        title="Вы уверены, что хотите удалить это?"
        description="Это действие нельзя будет отменить."
        okText="Да"
        cancelText="Нет"
        onConfirm={() => {}}
      >
        <Button type="primary" danger icon={<Trash2 size={15} />} />
      </Popconfirm>
    </Flex>
  );

  const renderStatus = (isDeleted) => (
    <Flex gap={5}>
      <Badge status={isDeleted ? "error" : "success"} />
      {isDeleted ? "Удалён" : "Активен"}
    </Flex>
  );

  const baseColumns = [
    {
      key: "id",
      title: "#",
      dataIndex: "index",
      width: 50,
    },
    ...columns,
  ];

  if (user.role === "superadmin") {
    baseColumns.push({
      key: "status",
      title: "Статус",
      dataIndex: "isDeleted",
      width: 100,
      render: renderStatus,
    });
  }

  baseColumns.push({
    key: "action",
    title: "Действие",
    width: 100,
    render: renderActions,
  });

  return (
    <Table
      dataSource={data}
      columns={baseColumns}
      bordered
      size="small"
      loading={loading}
    />
  );
}
