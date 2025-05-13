import { RegisterOptions } from "react-hook-form";

export const REQUIRED_MESSAGE = "Поле обязательно для заполнения";

export const EMAIL_FIELD_PATTERN = {
  required: REQUIRED_MESSAGE,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Некорректный E-mail",
  },
} as const;

export const NAME_FIELD_PATTERN = {
  required: REQUIRED_MESSAGE,
  pattern: {
    value: /[А-Яа-я]/i,
    message: "Используйте кириллицу",
  },
  minLength: {
    value: 2,
    message: "Длина имени не менее 2 символов",
  },
} as const;

export const PASSWORD_FIELD_PATTERN = {
  required: REQUIRED_MESSAGE,
  pattern: {
    value: /[A-Za-z]/i,
    message: "Используйте латинские символы",
  },
  minLength: {
    value: 8,
    message: "Длина пароля не менее 8 символов",
  },
} as const;
