import {
  ArchiveIcon,
  Building2Icon,
  Logs,
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
    children: [
      { label: "Склад", key: "store" },
      { label: "Тип Материалы", key: "store-type" },
    ],
  },
  {
    label: "Цех",
    key: "tsex",
    roles: ["superadmin"],
    icon: <Building2Icon size={25} />,
    children: [
      { label: "Сборка окон", key: "w-assembly" },
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
  {
    key: "archive",
    label: "Архив",
    roles: ["superadmin"],
    icon: <ArchiveIcon size={25} />,
    children: [{ label: "Склад", key: "archive/store" }],
  },
  {
    key: "logs",
    label: "Логи",
    roles: ["superadmin"],
    icon: <Logs size={25} />,
  },
];

const tsex = [
  {
    label: "Сборка окон",
    key: "w-assembly",
    roles: ["tsex-manager"],
    icon: <Building2Icon size={25} />,
  },
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
    label: "Тип Материалы",
    key: "store-type",
    roles: ["storekeeper"],
    icon: <StoreIcon size={25} />,
  },
  {
    label: "Склад",
    key: "store",
    roles: ["storekeeper"],
    icon: <Warehouse size={25} />,
  },
];

export const sidebar = () => {
  return [...admin, ...tsex, ...accountant, ...store];
};
