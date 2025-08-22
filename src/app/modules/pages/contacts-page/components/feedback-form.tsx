import { FC } from "react";

import Button from "#ui/button/button.tsx";

import TextField from "#ui/fields/text-field.tsx";

const FeedbackForm: FC = () => {
  return (
    <>
      <div className="feedback-form__title">Остались вопросы? Напишите нам!</div>
      <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
        <TextField className="feedback-form__name" type="text" placeholder="Как к Вам обращаться?" />
        <TextField className="feedback-form__telegram" type="text" placeholder="Ваш Telegram в форме @user" />
        <textarea className="feedback-form__message" placeholder="Текст сообщения" />
        <Button buttonText="Отправить" onClickAction={() => null} />
      </form>
    </>
  );
};

export default FeedbackForm;
