import { FC } from "react";

import ContactIcons from "#pages/general-page/components/contact-icons.tsx";

import Shedule from "./components/shedule-block";
import ContactsBlock from "./components/contacts-block";
import FeedbackForm from "./components/feedback-form";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import YandexMap from "#ui/map/yandex-map.tsx";

const ContactsPage: FC = () => {
  return (
    <PageLayout pageClassName="contacts-page">
      <>
        <PageTitle pageName="Контакты" />
        <div className="contacts-page__information">
          {/* <div className="contacts-page__left"> */}
          <ContactsBlock />
          <YandexMap />
          <Shedule />
          {/* </div> */}
          {/* <div className="contacts-page__right"> */}

          <FeedbackForm />
          {/* </div> */}
        </div>
        <div className="contacts-page__links-title">Мы в социальных сетях</div>
        <ContactIcons />
      </>
    </PageLayout>
  );
};

export default ContactsPage;
