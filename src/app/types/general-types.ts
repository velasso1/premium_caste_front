// Общие типы данных для ответов от сервера

export interface IServerResponse {
  status: "success" | "error";
  error?: string | undefined;
  details?: string | undefined;
}

export interface IRegistrationResponse extends IServerResponse {
  data: {
    user_id: string;
  };
}

export interface ILoginResponse extends IServerResponse {
  data: {
    access_token: string;
    refresh_token: string;
    user_id: string;
  };
}
