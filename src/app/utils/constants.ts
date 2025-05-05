interface IResponseErrors {
  [key: string]: string;
}

export const responseErrors: IResponseErrors = {
  authentication_failed: "Неверный логин или пароль",
  invalid_request: "Проверьте правильность вводимых данных",
};
