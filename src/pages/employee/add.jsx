import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { UploadCloud } from "lucide-react";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const navigate = useNavigate();

  const onFinish = async (e) => {
    const res = await createRequest("/employee/create", e);
    if (res) {
      navigate("/employee");
    }
  };
  const [employeeTypeOprtions, setEmployeeTypeOptions] = useState([]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const getEmployeeType = async () => {
    const res = await axios.get("/employeetype");
    setEmployeeTypeOptions(
      res.data.map((e) => ({ label: e.type, value: e._id }))
    );
  };

  useEffect(() => {
    getEmployeeType();
  }, []);

  return (
    <Card title="Создать сотрудник">
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={6}>
            <Form.Item
              name="surname"
              label="Фамилия"
              rules={[
                { required: true, message: "Пожалуйста, введите фамилию" },
              ]}
              placeholder="Введите фамилию"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="name"
              label="Имя"
              rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
              placeholder="Введите имя"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="patronymic"
              label="Отчество"
              rules={[
                { required: true, message: "Пожалуйста, введите отчество" },
              ]}
              placeholder="Введите отчество"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="employee_type_id"
              label="Тип сотрудника"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите тип сотрудника",
                },
              ]}
              placeholder="Выберите тип сотрудника"
            >
              <Select
                options={employeeTypeOprtions}
                placeholder="Выберите тип сотрудника"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="start_date"
              label="Дата начала"
              rules={[
                { required: true, message: "Пожалуйста, выберите дату начала" },
              ]}
              placeholder="Выберите дату начала"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="image"
              label="Загрузить изображение"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Только файлы JPG/PNG"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, загрузите изображение",
                },
              ]}
            >
              <Upload
                name="image"
                listType="picture"
                beforeUpload={() => false}
              >
                <Button icon={<UploadCloud size={15} />}>
                  Нажмите, чтобы загрузить
                </Button>
              </Upload>
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
