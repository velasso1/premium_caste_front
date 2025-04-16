import { FC } from "react";

interface IButtonProps {
  buttonText: string;
  buttonType?: "DEFAULT" | "LOADING" | "DISABLED";
  buttonStyle?: "PRIMARY" | "OUTLINED";
  customClass?: string;
  onClickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({ buttonType = "DEFAULT", buttonText, onClickAction, customClass, buttonStyle }) => {
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
