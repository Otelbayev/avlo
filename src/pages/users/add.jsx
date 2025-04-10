import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { roles } from "../../utils/mock";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const naviagate = useNavigate();

  const onFinish = async (e) => {
    const res = await createRequest("/user/create", e);
    if (res.user) {
      naviagate("/users");
    }
  };

  return (
    <Card title="Создать пользователя">
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={8}>
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
          <Col xs={24} md={8}>
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
          <Col xs={24} md={8}>
            <Form.Item
              name="role"
              label="Роль"
              rules={[{ required: true, message: "Пожалуйста, выберите роль" }]}
            >
              <Select options={roles} placeholder="Выберите роль" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Button htmlType="submit" type="primary">
              создать
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
