import { Button, Card, Col, Form, Row, Select } from "antd";
import { filterOption } from "../../utils/mock";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const [windowSizeOpt, setWindowSizeOpt] = useState([]);
  const [employeesOpt, setEmployeesOpt] = useState([]);
  const navigate = useNavigate();

  const onFinish = async (e) => {
    const res = await createRequest("/w-assembly/create", e);
    if (res) {
      navigate("/w-assembly");
    }
  };

  const getSizes = async () => {
    const res = await axios.get("/w-size/getall/tsex-manager");
    console.log(res.data);
    setWindowSizeOpt(
      res.data.map((item) => ({
        value: item?._id,
        label: `${item?.form?.name} | ${item?.width} x ${item?.height}`,
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

  useEffect(() => {
    getSizes();
    getEmployees();
  }, []);
  return (
    <Card title="Coздать сборку окон">
      <Form onFinish={onFinish} layout="vertical">
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
