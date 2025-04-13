import {
  Building2Icon,
  ScalingIcon,
  Shapes,
  StoreIcon,
  UserCog,
  UserCogIcon,
  Users,
  Warehouse,
} from "lucide-react";

const admin = [
  {
    key: "store-main",
    label: "Склад",
    roles: ["superadmin"],
    icon: <Warehouse size={25} />,
    children: [{ label: "Материалы", key: "store" }],
  },
  {
    label: "Цех",
    key: "tsex",
    roles: ["superadmin"],
    icon: <Building2Icon size={25} />,
    children: [
      { label: "Размеры окон", key: "w-size" },
      { label: "Форма окна", key: "w-form" },
    ],
  },
  {
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
    key: "users",
    label: "Пользователи",
    roles: ["superadmin"],
    icon: <UserCog size={25} />,
  },
];

const tsex = [
  {
    label: "Размеры окон",
    key: "w-size",
    roles: ["tsex-manager"],
    icon: <ScalingIcon size={25} />,
  },
  {
    label: "Форма окна",
    key: "w-form",
    roles: ["tsex-manager"],
    icon: <Shapes size={25} />,
  },
];

const accountant = [
  {
    label: "Сотрудники",
    key: "employee",
    roles: ["accountant"],
    icon: <Users size={25} />,
  },
  {
    label: "Тип сотрудника",
    key: "employee-type",
    roles: ["accountant"],
    icon: <UserCogIcon size={25} />,
  },
];

const store = [
  {
    label: "Материалы",
    key: "store",
    roles: ["storekeeper"],
    icon: <StoreIcon size={25} />,
  },
];

export const sidebar = () => {
  return [...admin, ...tsex, ...accountant, ...store];
};
