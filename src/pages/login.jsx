import { Button, Col, Form, Input, message, Row } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useState } from "react";
import Password from "antd/es/input/Password";
import icon from "/icon.jpg";
import { LoaderCircle } from "lucide-react";
import { useAuth } from "../context/auth-context";
import Loader from "../components/loader";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login, auth } = useAuth();

  const onFinish = async (values) => {
    try {
      message.loading({ key: "er", content: "Вход в систему..." });
      setLoading(true);
      const res = await axios.post("/auth/login", values);
      localStorage.setItem("token", res.data.token);

      if (res.status === 200) {
        message.success({ key: "er", content: "Успешный вход в систему!" });
        setLoading(false);
        login(res.data.user);
        navigate("/home");
      }
    } catch (e) {
      message.error({ key: "er", content: "Ошибка при входе в систему" });
      setLoading(false);
      setError(e.message);
    }
  };

  if (auth.isLoading) {
    return <Loader />;
  }

  if (auth.user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="border border-slate-300 rounded-md p-5 shadow-lg w-md mx-4">
        <Form layout="vertical" onFinish={onFinish}>
          <div className="flex items-center justify-center">
            <img className="w-32 h-32 rounded-md shadow-lg" src={icon} alt="" />
          </div>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Form.Item
                name="login"
                label="Логин"
                rules={[{ required: true }]}
              >
                <Input disabled={loading} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Парол"
                rules={[{ required: true }]}
              >
                <Password disabled={loading} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                disabled={loading}
                className="w-full"
                htmlType="submit"
                size="large"
                style={{ background: "#003e3c" }}
              >
                {loading ? (
                  <LoaderCircle className="animate-spin text-white" size={20} />
                ) : (
                  "вход"
                )}
              </Button>
            </Col>
            {error && (
              <Col span={24}>
                <p className="text-red-500 text-center">{error}</p>
              </Col>
            )}
          </Row>
        </Form>
      </div>
    </div>
  );
}
