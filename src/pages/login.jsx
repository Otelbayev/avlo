import { Button, Col, Form, Input, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import axios from "axios";
import { useState } from "react";
import Password from "antd/es/input/Password";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    try {
      message.loading({ key: "er", content: "Loading..." });
      const res = await axios.post(
        "http://localhost:3400/api/auth/login",
        values
      );

      if (res.status === 200) {
        message.success({ key: "er", content: res.data?.message });
        await login(res.data);
        navigate("/home");
      }
    } catch (e) {
      setError(e.message);
      message.error({ key: "er", content: "Error" });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="border border-slate-300 rounded-md p-5 shadow-lg w-md mx-4">
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={[10, 10]}>
            <Col span={24}>
              <Form.Item
                name="login"
                label="Login"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Password />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                disabled={loading}
                className="w-full"
                htmlType="submit"
              >
                Submit
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
