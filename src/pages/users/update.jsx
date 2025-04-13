import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { filterOption, roles } from "../../utils/mock";
import { useNavigate, useParams } from "react-router-dom";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";

export default function Update() {
  const naviagate = useNavigate();
  const { id } = useParams();
  const { updateRequest } = useUpdateRequest();
  const [form] = Form.useForm();

  const [employees, setEemployees] = useState([]);

  const onFinish = async (e) => {
    const res = await updateRequest(`/user/${id}`, e);
    if (res.user) {
      naviagate("/users");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/user/${id}`);

      form.setFieldsValue({
        login: res.data.login,
        role: res.data.role,
        isDeleted: res.data.isDeleted,
        employee: res.data.employee?._id,
      });
    }
    async function fetchEmployeeData() {
      const res = await axios.get("/employee/select");
      setEemployees(
        res.data.map((e) => ({
          label: `${e.surname} ${e.name} ${e.patronymic}`,
          value: e._id,
        }))
      );
    }
    fetchEmployeeData();
    fetchData();
  }, []);

  return (
    <Card title="Обновлять пользователя">
      <Form layout="vertical" onFinish={onFinish} form={form}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="login"
              label="Логин"
              rules={[
                { required: true, message: "Пожалуйста, введите логин!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="password"
              label="Пароль"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите пароль!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="role"
              label="Роль"
              rules={[{ required: true, message: "Пожалуйста, выберите роль" }]}
            >
              <Select options={roles} placeholder="Выберите роль" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="employee"
              label="Сотрудник"
              rules={[
                { required: true, message: "Пожалуйста, выберите Сотрудник" },
              ]}
            >
              <Select
                options={employees}
                filterOption={filterOption}
                showSearch
                placeholder="Выберите Сотрудник"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
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
          <Col xs={24}>
            <Button htmlType="submit" type="primary">
              Обновлять
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
