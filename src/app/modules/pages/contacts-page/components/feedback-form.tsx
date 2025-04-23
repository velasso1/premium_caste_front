import { FC } from "react";

import Button from "#ui/button/button.tsx";

const FeedbackForm: FC = () => {
  return (
    <>
      <div className="feedback-form__title">Остались вопросы? Напишите нам!</div>
      <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
        <input className="feedback-form__name" type="text" placeholder="Как к Вам обращаться?" />
        <input className="feedback-form__telegram" type="text" placeholder="Ваш Telegram в форме @user" />
        <textarea className="feedback-form__message" placeholder="Текст сообщения" />
        <Button buttonText="Отправить" onClickAction={() => console.log("form is sended")} />
      </form>
    </>
  );
};

export default FeedbackForm;
