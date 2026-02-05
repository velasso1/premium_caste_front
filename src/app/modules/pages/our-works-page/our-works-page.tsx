import { FC, useState, useEffect, useRef, ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { setActiveTag, setDownloadGalleries, clearDownloadGalleries } from "../../../store/slices/galleries";
import { useGetAllGalleriesQuery, useLazyGetGalleryByTagQuery } from "../../../store/api/galleries-api";

import { useMediaQuery } from "react-responsive";

import WorkItem from "./components/work-item";

import { IGetAllGalleriesResponse, IGalleryResponse } from "#types/api-types/api-response-types.ts";

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
import { WORKS_PAGE } from "#utils/constants.ts";

interface IPaginationState {
  page: number;
  perPage: number;
}

const OurWorksPage: FC = () => {
  const dispatch = useAppDispatch();
  const targetRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 769 });

  const { activeTag, downloadGalleries } = useAppSelector((state) => state.galleriesSlice);

  const [pagination, setPagination] = useState<IPaginationState>({
    page: Number(sessionStorage.getItem(WORKS_PAGE)) || 1,
    perPage: 24,
  });

  const [downloadMoreDisabled, setDownloadDisabled] = useState<boolean>(false);

  const [getGalleryByTag, galleryByTagStatus] = useLazyGetGalleryByTagQuery();
  const getGalleries = useGetAllGalleriesQuery({
    status: "published",
    page: `${pagination.page}`,
    per_page: `${pagination.perPage}`,
  });

  const [downloadMorePressed, setDownloadMorePresses] = useState<boolean>(false);

  useEffect(() => {
    if (activeTag !== "Всё") {
      getGalleryByTag({ tag: activeTag, per_page: `${pagination.perPage}` });
    }
  }, [activeTag]);

  useEffect(() => {
    if (galleryByTagStatus.data) {
      dispatch(setDownloadGalleries(galleryByTagStatus.data?.galleries));
    }
  }, [getGalleryByTag, galleryByTagStatus.data]);

  useEffect(() => {
    if (getGalleries.data) {
      dispatch(setDownloadGalleries(getGalleries.data?.galleries));
    }
  }, [getGalleries, getGalleries.data]);

  useEffect(() => {
    if (activeTag === "Всё") {
      setDownloadDisabled(pagination.page === getGalleries.data?.pagination.total_pages);
      return;
    }
    setDownloadDisabled(pagination.page === galleryByTagStatus.data?.pagination.total_pages);
  }, [getGalleries.data, galleryByTagStatus.data, pagination.page, activeTag]);

  const changeTagHandler = (tagName: string): void => {
    dispatch(setActiveTag(tagName));
  };

  const handleScroll = () => {
    if (!targetRef.current) return;

    targetRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const saveGalleries = (galleries: IGalleryResponse[]): void => {
    dispatch(setDownloadGalleries(galleries));
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
                  onClick={() => {
                    changeTagHandler(item.itemName);
                  }}
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
            {downloadMorePressed
              ? downloadGalleries.map((item) => {
                  return (
                    <WorkItem
                      key={item.id}
                      itemId={item.id}
                      imageSource={item.images[item.cover_image_index]}
                      itemTitle={item.title}
                      toggleZoom={() => null}
                    />
                  );
                })
              : activeTag === "Всё"
                ? getGalleries.data?.galleries
                  ? getGalleries.data?.galleries.map((item) => {
                      return (
                        <WorkItem
                          key={item.id}
                          itemId={item.id}
                          imageSource={item.images[item.cover_image_index]}
                          itemTitle={item.title}
                          toggleZoom={() => null}
                        />
                      );
                    })
                  : "Работ пока нет"
                : galleryByTagStatus.data?.galleries.length
                  ? [...galleryByTagStatus.data?.galleries].reverse().map((item) => {
                      return (
                        <WorkItem
                          key={item.id}
                          itemId={item.id}
                          imageSource={item.images[item.cover_image_index]}
                          itemTitle={item.title}
                          toggleZoom={() => null}
                        />
                      );
                    })
                  : "Пока нет таких работ"}
          </div>

          <div className="our-works-page__work-items-pagination">
            <Button
              buttonText="Загрузить еще"
              onClickAction={() => {
                setDownloadMorePresses(true);
                setPagination({ ...pagination, page: pagination.page + 1 });
                if (activeTag === "Всё" && getGalleries.data) {
                  saveGalleries(getGalleries.data.galleries);
                } else if (activeTag !== "Всё" && galleryByTagStatus.data) {
                  saveGalleries(galleryByTagStatus.data.galleries);
                }
              }}
              buttonStyle="OUTLINED"
              buttonType={getGalleries.status === "pending" ? "LOADING" : undefined}
              disabled={getGalleries.status === "pending" || downloadMoreDisabled}
            />
            <Stack spacing={2}>
              <Pagination
                page={pagination.page}
                onChange={(e: ChangeEvent<unknown>, value: number) => {
                  setDownloadMorePresses(false);
                  dispatch(clearDownloadGalleries());
                  setPagination({ perPage: 24, page: value });
                  handleScroll();
                  sessionStorage.setItem(WORKS_PAGE, `${value}`);
                }}
                count={
                  activeTag === "Всё"
                    ? getGalleries.data?.pagination.total_pages
                    : galleryByTagStatus.data?.pagination.total_pages
                }
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
