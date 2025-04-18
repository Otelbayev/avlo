import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import { dimensions } from "../../utils/mock";
import { useEffect } from "react";
import axios from "../../utils/axios";
import { useAuth } from "../../context/auth-context";

export default function Update() {
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const {
    auth: { user },
  } = useAuth();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    const res = await updateRequest(
      `/storetype/update${
        user?.role === "storekeeper" ? "/storekeeper" : ""
      }/${id}`,
      e
    );
    if (res) {
      navigate(`/store-type`);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get(`/storetype/getbyid/${id}`);
      form.setFieldsValue({
        name: res.data.name,
        type: res.data.type,
        isDeleted: res.data.isDeleted,
      });
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Card title="Обновить Тип материалы" loading={loading}>
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={8}>
            <Form.Item
              name="name"
              label="Название"
              rules={[
                { required: true, message: "Пожалуйста, введите название" },
              ]}
            >
              <Input placeholder="Введите название" />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="type"
              label="Тип"
              rules={[{ required: true, message: "Пожалуйста, выберите тип" }]}
            >
              <Select placeholder="Выберите тип" options={dimensions} />
            </Form.Item>
          </Col>
          {user.role === "superadmin" && (
            <Col xs={24} md={8}>
              <Form.Item
                name="isDeleted"
                label="Статус"
                rules={[
                  { required: true, message: "Пожалуйста, выберите статус" },
                ]}
              >
                <Select
                  options={[
                    { label: "Активен", value: false },
                    { label: "Удалён", value: true },
                  ]}
                  placeholder="Выберите статус"
                />
              </Form.Item>
            </Col>
          )}
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Обновить
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
