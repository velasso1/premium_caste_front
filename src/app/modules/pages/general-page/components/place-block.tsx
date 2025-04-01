import { FC } from "react";

import PageTitle from "../../../ui/page-title/page-title";

const PlaceBlock: FC = () => {
  return (
    <div className="place-block">
      <div className="block-container">
        <PageTitle pageName="где мы?" />
      </div>
    </div>
  );
};

export default PlaceBlock;
