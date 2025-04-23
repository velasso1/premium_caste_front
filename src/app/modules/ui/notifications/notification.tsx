import { FC } from "react";

interface INotificationProps {
  notifMessage: string;
  notifType: "error" | "success" | "warning" | "info";
}

enum notificationTitles {
  error = "error",
  success = "success",
  warning = "warning",
  info = "information",
}

const Notification: FC<INotificationProps> = ({ notifMessage, notifType }) => {
  return (
    <div className={`notification notification--${notificationTitles[notifType]}`}>
      <div className="notification__title">{notificationTitles[notifType]}</div>
      <div className="notification__body">{notifMessage}</div>
    </div>
  );
};

export default Notification;
