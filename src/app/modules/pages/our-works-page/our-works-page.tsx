import { FC } from "react";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";
import Sidebar from "#ui/sidebar/sidebar.tsx";

import WorkItem from "./components/work-item";

import tesla from "#images/tesla.png";

const OurWorksPage: FC = () => {
  return (
    <PageLayout pageClassName="our-works-page">
      <>
        <PageTitle pageName="Наши работы" />

        <div className="our-works-page__content">
          <Sidebar />
          <div className="our-works-page__work-items">
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
            <WorkItem imageSource={tesla} itemTitle="Mazda CX-5 Focal Inside, шумоизоляция дверей" />
          </div>
        </div>
      </>
    </PageLayout>
  );
};

export default OurWorksPage;
