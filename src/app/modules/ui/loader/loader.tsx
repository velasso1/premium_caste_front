import { FC } from "react";

import { ScaleLoader } from "react-spinners";

const Loader: FC = () => {
  return (
    <div className="loader">
      <ScaleLoader color={"#fff"} />
    </div>
  );
};

export default Loader;
