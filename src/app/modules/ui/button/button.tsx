import { FC } from "react";

interface IButtonProps {
  buttonText: string;
  buttonType?: "DEFAULT" | "LOADING";
  onClickAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButtonProps> = ({ buttonText, onClickAction }) => {
  return (
    <button className="button" onClick={(e) => onClickAction(e)}>
      {buttonText}
    </button>
  );
};

export default Button;
