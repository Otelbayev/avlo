import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { work_types } from "../../utils/mock";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
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
      `/employeetype/update${
        user.role === "accountant" ? "/accountant" : ""
      }/${id}`,
      e
    );
    if (res.employeeType) {
      navigate("/employee-type");
    }
  };

  const getData = async () => {
    setLoading(true);
    const res = await axios.get(`/employeetype/getbyid/${id}`);
    form.setFieldsValue({
      type: res.data.type,
      work_type: res.data.work_type,
      isDeleted: res.data.isDeleted,
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card title="Обновить тип сотрудника" loading={loading}>
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="type"
              label="Тип"
              rules={[{ required: true, message: "Пожалуйста, введите Тип!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="work_type"
              label="Тип зарплаты"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите Тип зарплаты!",
                },
              ]}
            >
              <Select placeholder="Select type" options={work_types} />
            </Form.Item>
          </Col>
          {user.role === "superadmin" && (
            <Col xs={24} md={6}>
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
            <Button htmlType="submit" type="primary">
              Обновить
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
