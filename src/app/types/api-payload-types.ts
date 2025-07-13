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

type TPostStatus = "published" | "draft" | "archived";

export interface IGetPostsPayload {
  postStatus: TPostStatus;
}

// GALLEREIS API APYLOAD TYPES

export interface ICreateGalleryPayload {
  author_id: string;
  title: string;
  status: TPostStatus;
  description: string;
  cover_image_index: number;
  images: string[];
  tags: string[];
  slug: string;
  metadata?: {
    additionalProp1: {};
  };
}
