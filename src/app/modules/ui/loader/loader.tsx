import { FC } from "react";

import { ScaleLoader, PulseLoader } from "react-spinners";

interface ILoaderProps {
  loaderType?: "circle" | "primary";
  buttonLoader?: boolean;
}

const Loader: FC<ILoaderProps> = ({ loaderType = "primary", buttonLoader }) => {
  if (buttonLoader) {
    return <PulseLoader color={`#fff`} size={8} />;
  }

  return (
    <div className="loader">
      {loaderType === "primary" ? <ScaleLoader color={"#fff"} /> : <PulseLoader color={`#fff`} />}
    </div>
  );
};

export default Loader;
