// payload for create post

import { IPost } from "#types/api-response-types.ts";

export interface IPostsInitialState {
  postStatus: "published" | "archived" | "draft";
  attachedImages: string[];
}

export interface IPostInfoPayload {
  title: string | undefined;
  content: string | undefined;
  excerpt: string | undefined;
  author_id: string | undefined;
  featured_image_id?: string | undefined;
  status: "draft" | "published" | "archived" | undefined;
  id?: string;
}
