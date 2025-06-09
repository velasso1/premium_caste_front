import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { IPost } from "#types/api-response-types.ts";

import polish2 from "#images/polish2.png";
import { useAppSelector } from "../../../../store";

interface IBlogItemProps {
  postInfo: IPost;
}

const BlogItem: FC<IBlogItemProps> = ({ postInfo }) => {
  const navigate = useNavigate();

  const { userIsAdmin } = useAppSelector((state) => state.userSlice);

  const createdDate = new Date(postInfo.created_at).toLocaleDateString();

  return (
    <div className="blog-page__blog-item" onClick={() => navigate(`../blog/item/${postInfo.id}`)}>
      <img src={polish2} alt="polish" />
      <div className="blog-page__item-description">{postInfo.excerpt}</div>
      <span className="blog-page__item-date">{createdDate}</span>
      <span className="blog-page__cross">подробнее</span>
    </div>
  );
};

export default BlogItem;
