import { Button, Card, Col, Form, Image, Input, Row, Upload } from "antd";
import { useState } from "react";
import useCreateRequest from "../../hooks/useCreateRequest";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "lucide-react";

export default function Add() {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const { createRequest } = useCreateRequest();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    if (file) {
      formData.append("img", file);
    }

    const res = await createRequest("/w-form/create", formData);
    if (res) {
      navigate("/w-form");
    }
  };

  const handleUpload = ({ file }) => {
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <Card title="Создать форма окна">
      <Form layout="vertical" onFinish={onFinish}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="name"
              label="Название"
              rules={[
                { required: true, message: "Пожалуйста, введите название" },
              ]}
            >
              <Input placeholder="Введите название" />
            </Form.Item>
          </Col>
          <Col xs={24} md={6}>
            <Form.Item label="Загрузить изображение" name="img">
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                onChange={(info) => handleUpload(info)}
              >
                <Button icon={<UploadIcon size={15} />}>
                  Выберите изображение
                </Button>
              </Upload>
            </Form.Item>
          </Col>
          {preview && (
            <Col xs={24} md={6}>
              <Image
                src={preview}
                alt="preview"
                style={{ marginTop: 16, borderRadius: 6 }}
                width={200}
              />
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
