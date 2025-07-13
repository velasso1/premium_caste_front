import { FC, useState } from "react";

import { useAppDispatch } from "../../../../store";
import { selectTags } from "../../../../store/slices/galleries";

interface ITagProps {
  title: string;
}

const Tag: FC<ITagProps> = ({ title }) => {
  const dispatch = useAppDispatch();

  const [tagSelected, selectTag] = useState<boolean>(false);

  return (
    <div
      className={`tag${tagSelected ? "--selected" : ""}`}
      onClick={() => {
        selectTag((prev) => !prev);
        dispatch(selectTags(title));
      }}
    >
      <div className="tag__title">{title}</div>
    </div>
  );
};

export default Tag;
