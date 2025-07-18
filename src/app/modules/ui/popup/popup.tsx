import React, { FC, ReactEventHandler, useEffect } from "react";

interface IPopupProps {
  isOpen: boolean;
  action: () => void;
  onClose: () => void;
}

const Popup: FC<IPopupProps> = ({ isOpen, action, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleYesClick = () => {
    action();
    onClose();
  };

  return (
    <div
      className="popup"
      onClick={(e) => {
        e.stopPropagation();
        handleOverlayClick(e);
      }}
    >
      <div className="popup__container">
        <p className="popup__question">Вы уверены, что хотите удалить?</p>

        <div className="popup__buttons">
          <button className="popup__button popup__button_type_yes" onClick={handleYesClick} type="button">
            Да
          </button>

          <button className="popup__button popup__button_type_no" onClick={onClose} type="button">
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
