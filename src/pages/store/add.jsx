import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  InputNumber,
  Row,
  Select,
} from "antd";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { filterOption } from "../../utils/mock";
import dayjs from "dayjs";

export default function Add() {
  const { createRequest } = useCreateRequest();
  const navigate = useNavigate();

  const [materialOpts, setMaterialOpts] = useState([]);

  const onFinish = async (e) => {
    const res = await createRequest("/store/create", e);
    if (res) {
      navigate("/store");
    }
  };

  const getData = async () => {
    const res = await axios.get(`/storetype/getall/storekeeper`);
    setMaterialOpts(
      res.data.map((item) => ({ label: item?.name, value: item?._id }))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card title="Добавить материал">
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          date: dayjs(),
          // price: 10000,
          // count: 10,
        }}
      >
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="store_type"
              label="Тип Материалы"
              rules={[
                { required: true, message: "Пожалуйста, введите название" },
              ]}
            >
              <Select
                placeholder="Введите название"
                options={materialOpts}
                filterOption={filterOption}
                showSearch
                allowClear
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="date"
              label="Дата"
              rules={[{ required: true, message: "Пожалуйста, введите дату" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                disabledDate={(current) => {
                  return current && !current.isSame(dayjs(), "day");
                }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="count"
              label="Количество"
              rules={[
                { required: true, message: "Пожалуйста, введите количество" },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Введите количество"
              />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name="price"
              label="Цена за единицу"
              rules={[{ required: true, message: "Пожалуйста, введите цену" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Введите цену"
                formatter={(value) =>
                  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                parser={(value) => value?.replace(/\./g, "")}
                min={0}
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
