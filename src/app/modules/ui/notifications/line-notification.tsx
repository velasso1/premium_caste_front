import { FC } from "react";

interface ILineNotificationProps {
  text: string;
}

const LineNotification: FC<ILineNotificationProps> = ({ text }) => {
  return <p className="login-form__clue">{text}</p>;
};

export default LineNotification;
