// payload for create post

export interface IPostsInitialState {
  postStatus: "published" | "archived" | "draft";
}

export interface IPostInfoPayload {
  title: string;
  content: string;
  excerpt: string;
  author_id: string;
  featured_image_id?: string;
  status: "draft" | "published" | "archived";
}
