import { FC, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setActiveTag } from "../../../store/slices/galleries";
import { useGetAllGalleriesQuery, useLazyGetGalleryByTagQuery } from "../../../store/api/galleries-api";

import { useMediaQuery } from "react-responsive";

import WorkItem from "./components/work-item";

import PageTitle from "#ui/page-title/page-title.tsx";
import PageLayout from "#ui/page-layout/page-layout.tsx";
import Sidebar from "#ui/sidebar/sidebar.tsx";
import SidebarItem from "#ui/sidebar/components/sidebar-item.tsx";
import Loader from "#ui/loader/loader.tsx";
import Button from "#ui/button/button.tsx";

import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";

const OurWorksPage: FC = () => {
  const dispatch = useAppDispatch();

  const { activeTag } = useAppSelector((state) => state.galleriesSlice);

  const [page, setPage] = useState<string>("1");

  const [getGalleryByTag, galleryByTagStatus] = useLazyGetGalleryByTagQuery();
  const getGalleries = useGetAllGalleriesQuery({ status: "published", page: page, per_page: "100" });

  const isMobile = useMediaQuery({ maxWidth: 769 });

  const changeTagHandler = (tagName: string): void => {
    dispatch(setActiveTag(tagName));
  };

  useEffect(() => {
    if (activeTag !== "Всё") {
      getGalleryByTag({ tag: activeTag });
    }
  }, [activeTag]);

  useEffect(() => {
    console.log(page);
    // ЕСЛИ ЗАПРОС С ОШИБКОЙ, НЕОБХОДИМО ВЕРНУТЬ ПРЕДУДЫЩЕЕ ЗНАЧЕНИЕ В PAGE
  }, [page]);

  // return <Loader />;

  return (
    <PageLayout pageClassName="our-works-page">
      <PageTitle pageName="Наши работы" />

      <div className="our-works-page__content">
        {isMobile ? (
          <select className="sidebar-select-menu" onChange={(e) => changeTagHandler(e.target.value)}>
            {sidebarItemsWorks.map((item) => {
              return (
                <option className="sidebar-select-menu__option" onClick={() => null}>
                  <SidebarItem itemInfo={item} activeElement={activeTag === item.itemName} onClick={() => null} />
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
                  onClick={() => changeTagHandler(item.itemName)}
                  itemInfo={item}
                  activeElement={activeTag === item.itemName}
                />
              );
            })}
          </Sidebar>
        )}

        <div className="our-works-page__work-items">
          {activeTag === "Всё"
            ? getGalleries.data?.galleries
              ? getGalleries.data?.galleries.map((item) => {
                  return (
                    <WorkItem
                      itemId={item.id}
                      imageSource={item.images[item.cover_image_index]}
                      itemTitle={item.title}
                    />
                  );
                })
              : "Работ пока нет"
            : galleryByTagStatus.data?.galleries.length
            ? galleryByTagStatus.data?.galleries.map((item) => {
                return (
                  <WorkItem itemId={item.id} imageSource={item.images[item.cover_image_index]} itemTitle={item.title} />
                );
              })
            : "Пока нет таких работ"}

          <Button
            buttonText="Загрузить еще"
            onClickAction={() => setPage((prev) => `${+prev + 1}`)}
            buttonStyle="OUTLINED"
            buttonType={getGalleries.isLoading ? "LOADING" : undefined}
            disabled={getGalleries.isLoading}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default OurWorksPage;
