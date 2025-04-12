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
} from "antd";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useAuth } from "../../context/auth-context";

export default function Update() {
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [sal, setSal] = useState("");
  const {
    auth: { user },
  } = useAuth();
  const [employeeTypeOprtions, setEmployeeTypeOptions] = useState([]);

  const getData = async () => {
    const res = await axios.get(`/employee/${id}`);
    setSal(res.data?.employee_type_id?.work_type);

    form.setFieldsValue({
      name: res.data.name,
      surname: res.data.surname,
      patronymic: res.data.patronymic,
      employee_type_id: res.data?.employee_type_id?._id,
      start_date: dayjs(res.data.start_date),
      isDeleted: res.data.isDeleted,
      salary: res.data.salary,
    });
  };

  const onFinish = async (e) => {
    const res = await updateRequest(
      `/employee${user?.role !== "superadmin" ? "/accountant" : ""}/${id}`,
      e
    );
    if (res) {
      navigate("/employee");
    }
  };

  const getEmployeeType = async () => {
    const res = await axios.get("/employeetype");
    console.log(res.data);
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
    getData();
  }, []);

  return (
    <Card title="Oбновлять сотрудника">
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
            <Button type="primary" htmlType="submit">
              обновлять
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
