import { FC } from "react";

import Loader from "#ui/loader/loader.tsx";

interface IButtonProps {
  buttonText: string;
  buttonType?: "DEFAULT" | "LOADING";
  buttonStyle?: "PRIMARY" | "OUTLINED";
  disabled?: boolean;
  Icon?: string;
  onClickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({
  buttonType = "DEFAULT",
  buttonText,
  onClickAction,
  buttonStyle = "PRIMARY",
  disabled = false,
  Icon,
}) => {
  return (
    <>
      <button
        className={`${buttonStyle === "PRIMARY" ? "button" : "button--outlined"}`}
        onClick={(e) => onClickAction(e)}
        disabled={disabled}
      >
        {buttonType === "DEFAULT" ? buttonText : <Loader buttonLoader={true} />}
      </button>
    </>
  );
};

export default Button;
