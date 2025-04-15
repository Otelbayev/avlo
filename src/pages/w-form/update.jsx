import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import { useEffect, useState } from "react";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import { UploadIcon } from "lucide-react";
import axios from "../../utils/axios";
import { useAuth } from "../../context/auth-context";

export default function Update() {
  const [file, setFile] = useState(null);
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [img, setImg] = useState("");

  const {
    auth: { user },
  } = useAuth();

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("isDeleted", values.isDeleted);

    if (file) {
      formData.append("img", file);
    }

    const res = await updateRequest(
      `/w-form/update${
        user.role === "tsex-manager" ? "/tsex-manager" : ""
      }/${id}`,
      formData
    );
    if (res) {
      navigate("/w-form");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`/w-form/getbyid/${id}`);
      form.setFieldsValue({
        name: res.data.name,
        isDeleted: res.data.isDeleted,
      });
      setImg(res.data.img);
    }
    fetchData();
  }, []);

  return (
    <Card title="Обновлять форма окна">
      <Form layout="vertical" onFinish={onFinish} form={form}>
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
                onChange={(info) => setFile(info.file)}
              >
                <Button icon={<UploadIcon size={15} />}>
                  Выберите изображение
                </Button>
              </Upload>
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

          <Col xs={24} md={6}>
            <Image
              src={`${import.meta.env.VITE_IMG_API}/uploads/${img}`}
              alt="image"
              style={{ marginTop: 16, borderRadius: 6 }}
              width={200}
            />
          </Col>

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
