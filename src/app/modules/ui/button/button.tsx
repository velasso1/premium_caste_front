import { FC } from "react";

interface IButtonProps {
  buttonText: string;
  onClickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonType?: "DEFAULT" | "LOADING" | "DISABLED";
  customClass?: string;
}

const Button: FC<IButtonProps> = ({ buttonType = "DEFAULT", buttonText, onClickAction, customClass }) => {
  return (
    <button
      className={`${buttonType === "DISABLED" ? "button-disabled" : "button"} ${customClass}`}
      onClick={(e) => onClickAction(e)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
