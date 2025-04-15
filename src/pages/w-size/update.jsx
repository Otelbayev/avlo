import { Button, Col, Form, InputNumber, Row, Select } from "antd";
import Card from "antd/es/card/Card";
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { PlusCircleIcon, Trash2Icon } from "lucide-react";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import { filterOption } from "../../utils/mock";
import { useAuth } from "../../context/auth-context";

export default function Update() {
  const [formOpt, setFormOpt] = useState([]);
  const [materialOpts, setMaterialOpts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();

  const { updateRequest } = useUpdateRequest();

  const {
    auth: { user },
  } = useAuth();

  const onFinish = async (e) => {
    const res = await updateRequest(
      `/w-size/update${
        user?.role === "tsex-manager" ? "/tsex-manager" : ""
      }/${id}`,
      e
    );
    if (res) {
      navigate("/w-size");
    }
  };

  async function fetchForm() {
    const res = await axios.get("/w-form/getall/tsex-manager");
    setFormOpt(
      res.data?.map((item) => ({ value: item?._id, label: item?.name }))
    );
  }

  async function fetchMaterial() {
    const res = await axios.get("/storetype/getall/storekeeper");
    setMaterialOpts(
      res.data.map((item) => ({ label: item?.name, value: item?._id }))
    );
  }

  async function getData() {
    const res = await axios.get(`/w-size/getbyid/${id}`);
    form.setFieldsValue({
      width: res.data.width,
      height: res.data.height,
      form: res.data?.form?._id,
      store_type: res.data?.store_type?.map((e) => ({
        id: e.id?._id,
        count: e?.count,
      })),
    });
  }

  useEffect(() => {
    fetchForm();
    fetchMaterial();
    getData();
  }, []);

  return (
    <Card title="Обновлять размеры окон">
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={8}>
            <Form.Item
              name="height"
              label="Высота"
              rules={[
                { required: true, message: "Пожалуйста, введите высоту" },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Введите высоту"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="width"
              label="Ширина"
              rules={[
                { required: true, message: "Пожалуйста, введите ширину" },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Введите ширину"
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={8}>
            <Form.Item
              name="form"
              label="Форма окна"
              rules={[
                { required: true, message: "Пожалуйста, выберите форму окна" },
              ]}
            >
              <Select placeholder="Выберите форму" options={formOpt} />
            </Form.Item>
          </Col>

          <Form.List name="store_type">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <React.Fragment key={key}>
                    <Col xs={24} md={11}>
                      <Form.Item
                        {...restField}
                        name={[name, "id"]}
                        label="Материал"
                        rules={[
                          {
                            required: true,
                            message: "Пожалуйста, выберите материал",
                          },
                        ]}
                      >
                        <Select
                          options={materialOpts}
                          filterOption={filterOption}
                          showSearch
                          placeholder="Выберите материал"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={20} md={11}>
                      <Form.Item
                        {...restField}
                        name={[name, "count"]}
                        label="Сколько?"
                        rules={[
                          {
                            required: true,
                            message: "Пожалуйста, введите количество",
                          },
                        ]}
                      >
                        <InputNumber
                          placeholder="Сколько?"
                          className="!w-full"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={4} md={2}>
                      <Form.Item label=" ">
                        <Button
                          danger
                          onClick={() => remove(name)}
                          className="w-full"
                          type="primary"
                        >
                          <Trash2Icon size={20} />
                        </Button>
                      </Form.Item>
                    </Col>
                  </React.Fragment>
                ))}
                <Col span={24}>
                  <Form.Item label="Добавить материал">
                    <Button
                      className="w-full"
                      type="dashed"
                      onClick={() => add()}
                      icon={<PlusCircleIcon size={20} />}
                    >
                      Добавить
                    </Button>
                  </Form.Item>
                </Col>
              </>
            )}
          </Form.List>

          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Обновлять
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
