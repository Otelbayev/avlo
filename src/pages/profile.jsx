import { Button, Card, Col, Form, Input, Row } from "antd";
import { useAuth } from "../context/auth-context";
import Password from "antd/es/input/Password";
import useUpdateRequest from "../hooks/useUpdateRequest";

export default function Profile() {
  const { updateRequest } = useUpdateRequest();
  const { user, logout } = useAuth();
  const onFinish = async (e) => {
    delete e.newPassword1;
    const res = await updateRequest("/user/updateprofile", e);
    if (res) {
      logout();
    }
  };

  return (
    <Card title="Профиль">
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          login: user.login,
        }}
      >
        <Row gutter={[10, 10]}>
          <Col xs={24} md={12}>
            <Form.Item
              name="login"
              label="Логин"
              rules={[
                { required: true, message: "Пожалуйста, введите ваш логин!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="oldPassword"
              label="Текущий пароль"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите текущий пароль!",
                },
              ]}
            >
              <Password />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="newPassword"
              label="Новый пароль"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите новый пароль!",
                },
              ]}
            >
              <Password />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="newPassword1"
              label="Повторите новый пароль"
              dependencies={["newPassword"]}
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, повторите новый пароль!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Пароли не совпадают!"));
                  },
                }),
              ]}
            >
              <Password />
            </Form.Item>
          </Col>

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
