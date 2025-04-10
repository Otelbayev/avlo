import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/auth-context";

const useUpdateRequest = () => {
  const { token } = useAuth();
  const updateRequest = async (url, data = {}) => {
    message.loading({ key: "l", content: "Обновление..." });
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_API}${url}`,
        data,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      message.success({ key: "l", content: "Успешно обновлено" });
      return response.data;
    } catch (error) {
      message.error({ key: "l", content: "Ошибка при обновлении" });
      throw error;
    }
  };

  return { updateRequest };
};

export default useUpdateRequest;
