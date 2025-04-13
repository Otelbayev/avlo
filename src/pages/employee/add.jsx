import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Upload,
} from "antd";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "lucide-react";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const navigate = useNavigate();
  const [sal, setSal] = useState("");
  const [employeeTypeOprtions, setEmployeeTypeOptions] = useState([]);
  const [file, setFile] = useState(null);

  const onFinish = async (e) => {
    const formData = new FormData();
    formData.append("surname", e.surname);
    formData.append("name", e.name);
    formData.append("patronymic", e.patronymic);
    formData.append("employee_type_id", e.employee_type_id);
    formData.append("start_date", e.start_date);
    if (sal === "salary") {
      formData.append("salary", e.salary);
    }
    if (file) {
      formData.append("img", file);
    }
    const res = await createRequest("/employee/create", formData);
    if (res) {
      navigate("/employee");
    }
  };

  const getEmployeeType = async () => {
    const res = await axios.get("/employeetype/accountant/get");
    setEmployeeTypeOptions(
      res.data.map((e) => ({
        label: e.type,
        value: e._id,
        work_type: e.work_type,
      }))
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
            >
              <Input placeholder="Введите фамилию" />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="name"
              label="Имя"
              rules={[{ required: true, message: "Пожалуйста, введите имя" }]}
            >
              <Input placeholder="Введите имя" />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item
              name="patronymic"
              label="Отчество"
              rules={[
                { required: true, message: "Пожалуйста, введите отчество" },
              ]}
            >
              <Input placeholder="Введите отчество" />
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
            >
              <Select
                options={employeeTypeOprtions}
                placeholder="Выберите тип сотрудника"
                onChange={(e, data) => setSal(data.work_type)}
              />
            </Form.Item>
          </Col>
          {sal === "salary" && (
            <Col xs={24} md={6}>
              <Form.Item
                name="salary"
                label="Зарплата (сум)"
                rules={[
                  { required: true, message: "Пожалуйста, введите Зарплата" },
                ]}
              >
                <InputNumber
                  className="!w-full"
                  min={0}
                  placeholder="Введите Зарплата"
                  formatter={(value) =>
                    value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  }
                  parser={(value) => value?.replace(/\./g, "")}
                />
              </Form.Item>
            </Col>
          )}
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
            <Form.Item label="Загрузить изображение" name="img">
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                onChange={(info) => setFile(info.file)}
              >
                <Button icon={<UploadIcon size={15} />}>
                  Выберите изображение
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
