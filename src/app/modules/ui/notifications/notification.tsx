import { FC, useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../store";
import { setEffect } from "../../../store/slices/effects";

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
  const dispatch = useAppDispatch();
  const { effectData } = useAppSelector((state) => state.effectsSlice);

  const [showNotif, setVisibilityNotif] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisibilityNotif(true);
      dispatch(setEffect({ status: null, message: "" }));
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
