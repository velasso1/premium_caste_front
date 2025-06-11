import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { IPost } from "#types/api-response-types.ts";

interface IBlogItemProps {
  postInfo: IPost;
  postPreview: string;
}

const BlogItem: FC<IBlogItemProps> = ({ postInfo, postPreview }) => {
  const navigate = useNavigate();

  const createdDate = new Date(postInfo.created_at).toLocaleDateString();

  return (
    <div className="blog-page__blog-item" onClick={() => navigate(`../blog/item/${postInfo.id}`)}>
      <div className="blog-page__item-preview">
        <img className="" src={"http://localhost:8080/uploads/" + postInfo.featured_image_path} alt="postImage" />
      </div>

      <div className="blog-page__item-description">{postInfo.excerpt}</div>
      <span className="blog-page__item-date">{createdDate}</span>
      <span className="blog-page__cross">подробнее</span>
    </div>
  );
};

export default BlogItem;
