import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { IPost } from "#types/api-response-types.ts";

import Loader from "#ui/loader/loader.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";
import Button from "#ui/button/button.tsx";

interface IBlogItemProps {
  postInfo: IPost;
  postPreview: string;
  postLoader?: boolean;
}

const BlogItem: FC<IBlogItemProps> = ({ postInfo, postPreview, postLoader }) => {
  const navigate = useNavigate();
  const params = useParams();

  const isManagingPage = params["*"] === routes.BLOG_POST_MANAGING;

  const createdDate = new Date(postInfo.created_at).toLocaleDateString();

  return (
    <div
      className="blog-page__blog-item"
      data-managing={isManagingPage}
      onClick={() => (isManagingPage ? null : navigate(`../blog/item/${postInfo.id}`))}
    >
      <div className="blog-page__item-preview">
        <img className="" src={"http://localhost:8080/uploads/" + postInfo.featured_image_path} alt="postImage" />
      </div>

      <div className="blog-page__item-description">{postInfo.excerpt}</div>
      <span className="blog-page__item-date">{createdDate}</span>
      <span className="blog-page__cross">
        {isManagingPage ? (
          <div className="blog-page__managing-buttons">
            <Button buttonText="Опубликовать" buttonStyle="OUTLINED" onClickAction={() => console.log(1)} />
            <Button buttonText="Архивировать" buttonStyle="OUTLINED" onClickAction={() => undefined} />

            <Button buttonText="Изменить" buttonStyle="OUTLINED" onClickAction={() => undefined} />
            <Button buttonText="Удалить" buttonStyle="OUTLINED" onClickAction={() => undefined} />
          </div>
        ) : (
          "подробнее"
        )}
      </span>
    </div>
  );
};

export default BlogItem;
