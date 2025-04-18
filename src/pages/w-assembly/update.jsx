import { Button, Card, Col, Form, Row, Select } from "antd";
import { filterOption } from "../../utils/mock";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export default function Update() {
  const { updateRequest } = useUpdateRequest();
  const [windowSizeOpt, setWindowSizeOpt] = useState([]);
  const [employeesOpt, setEmployeesOpt] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const {
    auth: { user },
  } = useAuth();

  const onFinish = async (e) => {
    const res = await updateRequest(
      `/w-assembly/update${
        user.role === "tsex-manager" ? "/tsex-manager" : ""
      }/${id}`,
      e
    );
    if (res) {
      navigate("/w-assembly");
    }
  };
  const getSizes = async () => {
    const res = await axios.get("/w-size/getall/tsex-manager");
    setWindowSizeOpt(
      res.data.map((item) => ({
        value: item?._id,
        label: `${item.width} x ${item.height}`,
      }))
    );
  };
  const getEmployees = async () => {
    const res = await axios.get("/employee/select");
    setEmployeesOpt(
      res.data.map((e) => ({
        label: `${e.surname} ${e.name} ${e.patronymic}`,
        value: e._id,
      }))
    );
  };

  const getById = async () => {
    setLoading(true);
    const res = await axios.get(`/w-assembly/getbyid/${id}`);
    form.setFieldsValue({
      window: res.data?.window?._id,
      employees: res.data?.employees?.map((e) => e._id),
      isDeleted: res.data.isDeleted,
    });

    setLoading(false);
  };

  useEffect(() => {
    getSizes();
    getEmployees();
    getById();
  }, []);

  return (
    <Card title="Обновить сборку окон" loading={loading}>
      <Form onFinish={onFinish} layout="vertical" form={form}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="window"
              label="Размер окна"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите размер окна",
                },
              ]}
            >
              <Select
                placeholder="Выберите размер окна"
                options={windowSizeOpt}
                showSearch
                filterOption={filterOption}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="employees"
              label="Сотрудники"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, выберите сотрудников",
                },
              ]}
            >
              <Select
                placeholder="Выберите сотрудников"
                mode="multiple"
                showSearch
                filterOption={filterOption}
                options={employeesOpt}
                maxCount={2}
              />
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
              Обновить
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
