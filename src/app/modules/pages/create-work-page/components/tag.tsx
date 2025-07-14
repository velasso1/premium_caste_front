import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectTags } from "../../../../store/slices/galleries";

interface ITagProps {
  title: string;
}

const Tag: FC<ITagProps> = ({ title }) => {
  const dispatch = useAppDispatch();

  const { createGalleryTags } = useAppSelector((state) => state.galleriesSlice);

  return (
    <div
      className={`tag${createGalleryTags.includes(title) ? "--selected" : ""}`}
      onClick={() => {
        dispatch(selectTags(title));
      }}
    >
      <div className="tag__title">{title}</div>
    </div>
  );
};

export default Tag;
