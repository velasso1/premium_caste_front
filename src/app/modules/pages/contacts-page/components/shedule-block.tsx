import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

const Shedule: FC = () => {
  const workingTime: string = "11:00 - 21:00";

  return (
    <ContentBlockLayout contentTitle="График работы">
      <div className="shedule">
        <ul className="contacts-page__list">
          <li className="contacts-page__item">
            <span className="contacts-page__day">Понедельник: </span>
            <span className="contacts-page__highlight">{workingTime}</span>
          </li>
          <li className="contacts-page__item">
            <span className="contacts-page__day">Вторник: </span>{" "}
            <span className="contacts-page__highlight">{workingTime}</span>
          </li>
          <li className="contacts-page__item">
            <span className="contacts-page__day">Среда: </span>
            <span className="contacts-page__highlight">{workingTime}</span>
          </li>
          <li className="contacts-page__item">
            <span className="contacts-page__day">Четверг: </span>
            <span className="contacts-page__highlight">{workingTime}</span>
          </li>
          <li className="contacts-page__item">
            <span className="contacts-page__day">Пятница: </span>
            <span className="contacts-page__highlight">{workingTime}</span>
          </li>
          <li className="contacts-page__item">
            <span className="contacts-page__day">Суббота: </span>
            <span className="contacts-page__highlight">12:00 - 20:00</span>
          </li>
          <li className="contacts-page__item">
            <span className="contacts-page__day">Воскресенье: </span>
            <span className="contacts-page__highlight">Выходной</span>
          </li>
        </ul>
      </div>
    </ContentBlockLayout>
  );
};

export default Shedule;
