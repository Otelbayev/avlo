import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { UploadCloud } from "lucide-react";
import useUpdateRequest from "../../hooks/useUpdateRequest";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function Update() {
  const [image, setImage] = useState(null);
  const { updateRequest } = useUpdateRequest();
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();

  const getData = async () => {
    const res = await axios.get(`/employee/${id}`);

    setImage(res.data.image);

    form.setFieldsValue({
      name: res.data.name,
      surname: res.data.surname,
      patronymic: res.data.patronymic,
      employee_type_id: res.data?.employee_type_id?._id,
      start_date: dayjs(res.data.start_date),
      isDeleted: res.data.isDeleted,
    });
  };

  const onFinish = async (e) => {
    const res = await updateRequest(`/employee/${id}`, e);

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
          <Col xs={24} md={6}>
            <Form.Item
              name="image"
              label="Загрузить изображение"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Только файлы JPG/PNG"
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
          <Col xs={24} md={6}>
            <Form.Item name="img" label="Изображение">
              <Image src={`${import.meta.env.VITE_IMG_API}/${image}`} />
            </Form.Item>
          </Col>

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
