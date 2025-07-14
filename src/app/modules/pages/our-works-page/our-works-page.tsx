import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setActiveTag } from "../../../store/slices/galleries";

import { useGetAllGalleriesQuery } from "../../../store/api/galleries-api";

import { useMediaQuery } from "react-responsive";

import PageTitle from "../../ui/page-title/page-title";
import PageLayout from "../../ui/page-layout/page-layout";
import Sidebar from "#ui/sidebar/sidebar.tsx";
import SidebarItem from "#ui/sidebar/components/sidebar-item.tsx";
import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";

import WorkItem from "./components/work-item";

const OurWorksPage: FC = () => {
  const dispatch = useAppDispatch();

  const { activeTag } = useAppSelector((state) => state.galleriesSlice);

  const getGalleries = useGetAllGalleriesQuery({ status: "published", page: "1", per_page: "100" });

  const isMobile = useMediaQuery({ maxWidth: 769 });

  return (
    <PageLayout pageClassName="our-works-page">
      <PageTitle pageName="Наши работы" />

      <div className="our-works-page__content">
        {isMobile ? (
          <select className="sidebar-select-menu">
            {sidebarItemsWorks.map((item) => {
              return (
                <option className="sidebar-select-menu__option">
                  <SidebarItem
                    onClick={() => dispatch(setActiveTag(item.itemName))}
                    itemInfo={item}
                    activeElement={activeTag === item.itemName}
                  />
                </option>
              );
            })}
          </select>
        ) : (
          <Sidebar>
            {sidebarItemsWorks.map((item) => {
              return (
                <SidebarItem
                  key={item.itemName}
                  onClick={() => dispatch(setActiveTag(item.itemName))}
                  itemInfo={item}
                  activeElement={activeTag === item.itemName}
                />
              );
            })}
          </Sidebar>
        )}

        <div className="our-works-page__work-items">
          {getGalleries.data?.galleries
            ? getGalleries.data?.galleries.map((item) => {
                return <WorkItem imageSource={item.images[item.cover_image_index]} itemTitle={item.title} />;
              })
            : "Работ пока нет"}
        </div>
      </div>
    </PageLayout>
  );
};

export default OurWorksPage;
