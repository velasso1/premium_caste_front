import { FC, useState, useEffect, useRef, useCallback } from "react";

import { IGetAllImagesResponse } from "#types/api-types/api-response-types.ts";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectImagesForPost } from "../../../../store/slices/posts";
import { setImagesLimit } from "../../../../store/slices/user";

import PreviewItem from "./preview-item";

interface IAttachImagesProps {
  images: IGetAllImagesResponse | undefined;
  userId: string;
  saveTarget: "id" | "storage_path";
}

const AttachImages: FC<IAttachImagesProps> = ({ images, userId, saveTarget = "id" }) => {
  const dispatch = useAppDispatch();

  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { attachedImages } = useAppSelector((state) => state.postsSlice);
  const { imagesLimit } = useAppSelector((state) => state.userSlice);

  const [hasIntersectedOnce, setHasIntersectedOnce] = useState(false);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!images) return;

      const [entry] = entries;

      // сбрасываем флаг, когда элемент выходит из области видимости
      if (!entry.isIntersecting) {
        if (hasIntersectedOnce) setHasIntersectedOnce(false);
        return;
      }

      // проверяем, загружены ли все изображения (берём total если есть, иначе meta.count)
      const totalAvailable = images.total ?? images?.meta.count ?? 0;
      if (totalAvailable && imagesLimit >= totalAvailable) return;

      // не даём стрелять повторно, пока не выйдем из области видимости или не загрузим новые данные
      if (hasIntersectedOnce) return;

      setHasIntersectedOnce(true);
      dispatch(setImagesLimit(imagesLimit + 50));
    },
    [dispatch, hasIntersectedOnce, images, imagesLimit]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      root: containerRef.current,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observerRef.current = observer;

    const lastChild = containerRef.current.lastElementChild;
    if (lastChild) observer.observe(lastChild);

    return () => {
      observer.disconnect();
    };
  }, [handleObserver, images]);

  useEffect(() => {
    // сбрасываем флаг при подгрузке новых изображений
    setHasIntersectedOnce(false);
  }, [images]);

  // сбрасываем limitImages до 50
  useEffect(() => {
    return () => {
      dispatch(setImagesLimit(50));
    };
  }, []);

  return (
    <div className="create-blog-post-page__upload-container">
      Прикрепите набор картинок
      <div className="create-blog-post-page__preview-container" ref={containerRef}>
        {images && images?.data.length ? (
          images?.data.map((item) => {
            return (
              <PreviewItem
                onClick={() => dispatch(selectImagesForPost(item[`${saveTarget}`]))}
                item={item}
                userId={userId}
                isSelected={attachedImages.includes(item[`${saveTarget}`])}
                key={item.id}
              />
            );
          })
        ) : (
          <div>Пока что картинок нет</div>
        )}
      </div>
    </div>
  );
};

export default AttachImages;
