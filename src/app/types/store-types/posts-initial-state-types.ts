// payload for create post

export interface IPostInfoPayload {
  title: string;
  content: string;
  excerpt: string;
  author_id: string;
  featured_image_id?: string;
}
