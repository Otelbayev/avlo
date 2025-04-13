import { UserCog, Users, Warehouse } from "lucide-react";

export const admin = () => {
  return [
    {
      id: 1,
      key: "store-main",
      label: "Склад",
      roles: ["superadmin", "storekeeper"],
      icon: <Warehouse size={25} />,
      children: [
        { label: "Материалы", key: "store" },
        { label: "Форма окна", key: "w-form" },
      ],
    },
    {
      id: 2,
      key: "employee-main",
      label: "Сотрудники",
      roles: ["superadmin", "accountant"],
      icon: <Users size={25} />,
      children: [
        { label: "Сотрудники", key: "employee" },
        { label: "Тип сотрудника", key: "employee-type" },
      ],
    },
    {
      id: 3,
      key: "users",
      label: "Пользователи",
      roles: ["superadmin"],
      icon: <UserCog size={25} />,
    },
  ];
};
