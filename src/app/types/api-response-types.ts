// Общие типы данных для ответов от сервера
export interface IServerResponse {
  status: "success" | "error";
  error?: string | undefined;
  details?: string | undefined;
}

// тип с ошибкой запроса
export type CustomizedFetchBaseQueryError = {
  status?: number;
  data: { details: string; error: string; status: string };
};

// ответ от сервера при регистрации
export interface IRegistrationResponse extends IServerResponse {
  data: {
    user_id: string;
  };
}

// ответ от сервера при входе в аккаунт
export interface ILoginResponse extends IServerResponse {
  data: {
    access_token: string;
    refresh_token: string;
    user_id: string;
  };
}

// ответ от сервера при проверке статуса пользователя
export interface ICheckAdminResponse {
  is_admin: boolean;
}

// ответ от сервера с данными пользователя
export interface IGetUserInfoResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  is_admin: boolean;
  basket_id: string;
  registration_date: string;
  last_login: string;
}

// ответ от сервера с постами
export interface IAllPostsResponse {
  page: number;
  per_page: number;
  posts: IPost[];
  total_count: number;
}

export interface IPost {
  author_id: string;
  content: string;
  created_at: string;
  excerpt: string;
  featured_image_id: string;
  id: string;
  published_at: string;
  slug: string;
  status: string;
  title: string;
  updated_at: string;
}
