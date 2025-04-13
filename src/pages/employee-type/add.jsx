import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { work_types } from "../../utils/mock";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const navigate = useNavigate();

  const onFinish = async (e) => {
    const res = await createRequest("/employeetype/create", e);
    if (res.employeeType) {
      navigate("/employee-type");
    }
  };

  return (
    <Card title="Создать тип сотрудника">
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="type"
              label="Тип"
              rules={[{ required: true, message: "Пожалуйста, введите Тип!" }]}
            >
              <Input placeholder="Введите тип" />
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
              <Select placeholder="Выберите Тип" options={work_types} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button htmlType="submit" type="primary">
              создать
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
