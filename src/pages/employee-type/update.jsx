import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { work_types } from "../../utils/mock";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect } from "react";

export default function Update() {
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();

  const onFinish = async (e) => {
    const res = await updateRequest(`/employeetype/${id}`, e);
    if (res.employeeType) {
      navigate("/employee-type");
    }
  };

  const getData = async () => {
    const res = await axios.get(`/employeetype/${id}`);
    form.setFieldsValue({
      type: res.data.type,
      work_type: res.data.work_type,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card title="Обновлять тип сотрудника">
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
          <Col span={24}>
            <Button htmlType="submit" type="primary">
              обновлять
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
