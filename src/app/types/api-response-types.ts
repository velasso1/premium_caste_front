// Общие типы данных для ответов от сервера
export interface IServerResponse {
  status: "success" | "error";
  error?: string | undefined;
  details?: string | undefined;
}

// тип с ошибкой запроса
export type CustomizedFetchBaseQueryError = {
  data: { details: string; error: string; status: string };
  status?: number;
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
  featured_image_path: string;
  id: string;
  published_at: string;
  slug: string;
  status: string;
  title: string;
  updated_at: string;
  media_groups: IMediaGroups;
}

export interface IMediaGroups {
  content: IMediaGroupImage[];
  gallery: IMediaGroupImage[];
  attachment: IMediaGroupImage[];
}

export interface IMediaGroupImage {
  id: string;
  storage_path: string;
  position: number;
  group_id: string;
}

// ответ от сервера при получении картинок
export interface IGetAllImagesResponse {
  data: IImageInfo[];
}

export interface IImageInfo {
  id: string;
  uploader_id: string;
  created_at: "2025-04-28T07:00:00Z";
  file_size: number;
  height: number;
  width: number;
  is_public: boolean;
  media_type: "photo" | "audio" | "video" | "document";
  original_filename: string;
  storage_path: string;
}
