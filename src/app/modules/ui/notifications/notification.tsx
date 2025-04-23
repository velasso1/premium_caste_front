import { FC, useState, useEffect } from "react";

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
  const [showNotif, setVisibilityNotif] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibilityNotif(true);
    }, 5000);
  }, []);

  return (
    <div className={`notification notification--${notificationTitles[notifType]} ${showNotif && "notification--hide"}`}>
      <div className="notification__title">{notificationTitles[notifType]}</div>
      <div className="notification__body">{notifMessage}</div>
    </div>
  );
};

export default Notification;
