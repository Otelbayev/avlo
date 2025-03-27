"use client";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Имя пользователя и пароль обязательны");
      return;
    }
    console.log("Login Data:", formData);
    setError("");
    alert("Успешный вход (для демонстрации)");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded-lg shadow-md">
        <img src="/icon.jpg" className="w-[100px] mx-auto rounded-md" alt="" />
        <h2 className="text-2xl  my-4 font-bold text-center text-green-900">
          Войти в систему
        </h2>
        {error && (
          <p className="text-red-500 text-center text-sm mb-2">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-900"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-900"
          />
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-800 transition"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
