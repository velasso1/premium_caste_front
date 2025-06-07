export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IRegistrationPayload {
  email: string;
  name: string;
  password: string;
  phone: string;
}

export interface ICheckAdminPayload {
  userId: string;
}

export interface IGetUserInfoPayload {
  user_id: string;
}

export interface IUploadImagesPayload {
  file: File;
  uploader_id: string;
  media_type: "photo" | "video" | "audio" | "document";
  is_public?: boolean;
  width?: number;
  height?: number;
  duration?: number;
}
