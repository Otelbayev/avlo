import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";
import { dimensions } from "../../utils/mock";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const navigate = useNavigate();

  const onFinish = async (e) => {
    const res = await createRequest("/store/create", e);
    if (res) {
      navigate("/store");
    }
  };

  return (
    <Card title="Создать материалы">
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
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
          <Col xs={24} md={12}>
            <Form.Item
              name="type"
              label="Тип"
              rules={[{ required: true, message: "Пожалуйста, выберите тип" }]}
            >
              <Select placeholder="Выберите тип" options={dimensions} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Создать
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
