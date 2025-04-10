import { message } from "antd";
import axios from "axios";
import { useAuth } from "../context/auth-context";

const useCreateRequest = () => {
  const { token } = useAuth();

  const createRequest = async (url, data = {}) => {
    message.loading({ key: "l", content: "Создание..." });
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API}${url}`,
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      message.success({ key: "l", content: "Успешно создано" });
      return response.data;
    } catch (error) {
      message.error({ key: "l", content: "Ошибка при создании" });
      throw error;
    }
  };

  return { createRequest };
};

export default useCreateRequest;
