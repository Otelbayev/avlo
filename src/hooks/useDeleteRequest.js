import { message } from "antd";
import axios from "axios";
import { useAuth } from "../context/auth-context";

const useDeleteRequest = () => {
  const { token } = useAuth();

  const deleteRequest = async (url) => {
    message.loading({ key: "l", content: "Удаление..." });

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_API}${url}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      message.success({ key: "l", content: "Успешно удалено" });
      return response.data;
    } catch (error) {
      message.error({ key: "l", content: "Ошибка при удалении" });

      throw error;
    }
  };

  return { deleteRequest };
};

export default useDeleteRequest;
