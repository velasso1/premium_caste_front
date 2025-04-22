import { FC } from "react";

interface IButtonProps {
  buttonText: string;
  buttonType?: "DEFAULT" | "LOADING";
  buttonStyle?: "PRIMARY" | "OUTLINED";
  disabled?: boolean;
  onClickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({
  buttonType = "DEFAULT",
  buttonText,
  onClickAction,
  buttonStyle = "PRIMARY",
  disabled = false,
}) => {
  return (
    <button
      className={`${buttonStyle === "PRIMARY" ? "button" : "button--outlined"}`}
      onClick={(e) => onClickAction(e)}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
