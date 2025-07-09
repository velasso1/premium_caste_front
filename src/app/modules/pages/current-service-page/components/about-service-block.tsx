import { FC } from "react";

import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";

interface IAboutServiceBlockProps {
  serviceDescription: string;
}

const AboutServiceBlock: FC<IAboutServiceBlockProps> = ({ serviceDescription }) => {
  const description = serviceDescription.split(" \n ");

  return (
    <ContentBlockLayout contentTitle="ОБ УСЛУГЕ" customClassName="curent-service-page__about-service">
      {description.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </ContentBlockLayout>
  );
};

export default AboutServiceBlock;
