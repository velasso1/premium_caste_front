import { FC, useState, useEffect, useRef, ChangeEvent } from "react";

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

// ///////////////////////

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// //////////////////////

import { sidebarItemsWorks } from "#utils/auxuliary/sidebar-items.ts";

const OurWorksPage: FC = () => {
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const { activeTag } = useAppSelector((state) => state.galleriesSlice);

  const [pagination, setPagination] = useState<{ page: number; perPage: number }>({ page: 1, perPage: 25 });

  const [getGalleryByTag, galleryByTagStatus] = useLazyGetGalleryByTagQuery();
  const getGalleries = useGetAllGalleriesQuery({
    status: "published",
    page: `${pagination.page}`,
    per_page: `${pagination.perPage}`,
  });

  const changeTagHandler = (tagName: string): void => {
    dispatch(setActiveTag(tagName));
  };

  useEffect(() => {
    if (activeTag !== "Всё") {
      getGalleryByTag({ tag: activeTag });
    }
  }, [activeTag]);

  // useEffect(() => {

  // }, [getGalleries]);

  const handleScroll = () => {
    if (!targetRef.current) return;

    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <PageLayout pageClassName="our-works-page">
      <PageTitle pageName="Наши работы" ref={targetRef} />

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

        <div className="our-works-page__work-items-wrapper">
          {getGalleries.status === "pending" && <Loader loaderType="circle" />}
          <div className="our-works-page__work-items">
            {activeTag === "Всё"
              ? getGalleries.data?.galleries
                ? getGalleries.data?.galleries.map((item) => {
                    return (
                      <WorkItem
                        key={item.id}
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
                    <WorkItem
                      itemId={item.id}
                      imageSource={item.images[item.cover_image_index]}
                      itemTitle={item.title}
                    />
                  );
                })
              : "Пока нет таких работ"}
          </div>

          <div className="our-works-page__work-items-pagination">
            <Button
              buttonText="Загрузить еще"
              onClickAction={() => setPagination({ ...pagination, perPage: pagination.perPage + 25 })}
              buttonStyle="OUTLINED"
              buttonType={getGalleries.status === "pending" ? "LOADING" : undefined}
              disabled={getGalleries.status === "pending" || pagination.perPage === 100}
            />
            <Stack spacing={2}>
              <Pagination
                page={pagination.page}
                onChange={(e: ChangeEvent<unknown>, value: number) => {
                  setPagination({ perPage: 25, page: value });
                  handleScroll();
                }}
                count={getGalleries.data?.total ? Math.round(getGalleries.data?.total / 100) : 0}
                variant="outlined"
                shape="rounded"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "white", // светлые цифры
                    borderColor: "#ff5100ff", // светлая обводка
                    borderRadius: "8px",
                    transition: "0.3s",
                    marginTop: "40px",
                    "&:hover": {
                      backgroundColor: "#ff510028",
                      borderRadius: "10px",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#ff510059",
                      color: "white",
                    },
                  },
                }}
              />
            </Stack>
          </div>
        </div>
      </div>
      {/* <Button buttonText="Наверх" onClickAction={() => handleScroll()} buttonStyle="OUTLINED" /> */}
    </PageLayout>
  );
};

export default OurWorksPage;
