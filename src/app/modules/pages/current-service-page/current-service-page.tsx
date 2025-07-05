import { FC } from "react";

import { useNavigate, useParams } from "react-router-dom";

import PageLayout from "#ui/page-layout/page-layout.tsx";
import PageTitle from "#ui/page-title/page-title.tsx";
import ContentBlockLayout from "#ui/page-layout/content-block-layout.tsx";
import Button from "#ui/button/button.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

import { serviceNames } from "#utils/auxuliary/services-items-list.ts";

const CurrentServicePage: FC = () => {
  const navigate = useNavigate();
  const { service } = useParams<{ service: keyof typeof serviceNames }>();

  return (
    <PageLayout pageClassName="curent-service-page">
      <PageTitle pageName={service ? serviceNames[`${service}`] : serviceNames["vinyl"]} />

      <ContentBlockLayout contentTitle="ОБ УСЛУГЕ" customClassName="curent-service-page__about-service">
        <p>
          Сегодня, каждый день, мы встречаем на улицах тысячи автомобилей, ставших привычной частью нашей жизни.
          Возможность выделиться из этого безликого монотонного потока – оклейка цветными виниловыми плёнками. Богатый
          опыт работы позволяет нам не просто выполнить «прихоть» клиента, но создать индивидуальный проект, собравший в
          себя лучшие идеи клиента и нашей команды.
        </p>
        <p>
          Для этого мы используем высококачественную виниловую пленку и печатаем на ней макет, подготовленный нашим
          дизайнером. Или находим сочетания несколько цветов и текстур, чтобы придать вашему транспорту свой характер.
        </p>

        <p>
          Так же Вы не должны забывать, что автомобиль нуждается в защите от агрессивных воздействий внешней среды,
          таких как: сколы, царапины, пескоструй. Цветные плёнки так же выполняют и защитные функции. Плёнка более
          эластична, чем лак и распределяет удар по большей площади и потому более устойчива к повреждениям. Кузов
          дольше сохраняет свой первозданный вид, что несомненно повлияет на цену автомобиля в случае его дальнейшей
          продажи.
        </p>

        <p>
          Мы работаем напрямую с поставщиками таких брендов плёнок, как – Oracal, KPMF, Avery, Hexis. На все выполняемые
          работы мы предоставляем гарантию 1 год. Гарантия действует при отсутствии следов механических повреждений и
          связи с внутренней коррозией. Так же следует учитывать, что качество покраски вашего авто напрямую влияет на
          качество выполняемых работ.
        </p>
      </ContentBlockLayout>

      <Button buttonText="Вернуться к списку услуг" onClickAction={() => navigate(`../${routes.SERVICES_PAGE}`)} />
    </PageLayout>
  );
};

export default CurrentServicePage;
