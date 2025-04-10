import { UserCog, Users } from "lucide-react";

export const admin = () => {
  return [
    {
      id: 1,
      key: "employee-main",
      label: "Сотрудники",
      roles: ["superadmin"],
      icon: <Users size={25} />,
      children: [
        { label: "Сотрудники", key: "employee" },
        { label: "Тип сотрудника", key: "employee-type" },
      ],
    },
    {
      id: 2,
      key: "users",
      label: "Пользователи",
      roles: ["superadmin"],
      icon: <UserCog size={25} />,
    },
  ];
};
