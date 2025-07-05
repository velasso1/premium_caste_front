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
  user_id: string;
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

export interface IAttachMediaToGroupPayload {
  group_id: string;
  media_id: string[];
}

export interface IAttachMediaGroupToPostPayload {
  post_id: string;
  group_id: string;
  relation_type?: string;
}

export interface ICreateMediaGroupPayload {
  owner_id: string;
  description: string;
}

export interface IGetPostsPayload {
  postStatus: "published" | "draft" | "archived";
}
