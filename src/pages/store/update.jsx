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
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import { dimensions, filterOption } from "../../utils/mock";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useAuth } from "../../context/auth-context";
import dayjs from "dayjs";

export default function Update() {
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const {
    auth: { user },
  } = useAuth();

  const [loading, setLoading] = useState(false);
  const [materialOpts, setMaterialOpts] = useState([]);

  const onFinish = async (e) => {
    const res = await updateRequest(
      `/store/update${
        user?.role === "storekeeper" ? "/storekeeper" : ""
      }/${id}`,
      e
    );
    if (res) {
      navigate(`/store`);
    }
  };

  const getData = async () => {
    const res = await axios.get(`/storetype/getall/storekeeper`);
    setMaterialOpts(
      res.data.map((item) => ({ label: item?.name, value: item?._id }))
    );
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get(`/store/getbyid/${id}`);
      form.setFieldsValue({
        store_type: res.data?.store_type?._id,
        date: dayjs(res.data.date),
        count: res.data.count,
        price: res.data.price,
        isDeleted: res.data.isDeleted,
      });
      setLoading(false);
    }

    fetchData();
    getData();
  }, []);

  return (
    <Card title="Обновить материал" loading={loading}>
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
          {user.role === "superadmin" && (
            <Col xs={24} md={8}>
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
              Создать
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
