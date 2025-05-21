import { FC } from "react";

import { useNavigate } from "react-router-dom";

import polish2 from "#images/polish2.png";

interface IBlogItemProps {
  id: number;
}

const BlogItem: FC<IBlogItemProps> = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-page__blog-item" onClick={() => navigate(`item/${id}`)}>
      <img src={polish2} alt="polish" />
      <div className="blog-page__item-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit et quod quia veritatis
        possimus labore minima totam dolorum nisi voluptatibus nostrum placeat fugit culpa ipsam suscipit, aliquid
        temporibus ea!
      </div>
      <span className="blog-page__item-date">17.01.2025</span>
      <span className="blog-page__cross">подробнее</span>
    </div>
  );
};

export default BlogItem;
