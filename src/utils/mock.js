export const roles = [
  { value: "storekeeper", label: "Складщик" },
  { value: "tsex-manager", label: "Начальник цеха" },
  { value: "accountant", label: "Бухгалтер" },
];

export const work_types = [
  { value: "salary", label: "Зарплата" },
  { value: "volume", label: "Объём" },
];

export const dimensions = [
  { value: "m", label: "Метр" },
  { value: "kg", label: "Килограмм" },
  { value: "sht", label: "Штука" },
  { value: "m2", label: "Квадратный метр" },
];

export const filterOption = (input, option) =>
  option.label.toLowerCase().includes(input.toLowerCase());
