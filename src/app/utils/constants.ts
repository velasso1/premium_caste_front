interface IResponseErrors {
  readonly [key: string]: string;
}

export const RESPONSE_ERRORS: IResponseErrors = {
  authentication_failed: "Неверный логин или пароль",
  invalid_request: "Проверьте правильность вводимых данных",
} as const;

export const EXPIRES_SESSION_TIME = "_pc_seAt";
export const USER_ID = "_pc_uid";
