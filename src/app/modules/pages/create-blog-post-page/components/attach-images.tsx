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
      // if (!images) return;

      const [entry] = entries;

      if (entry.isIntersecting) {
        // пропускаем первый вызов при монтировании
        if (!hasIntersectedOnce) {
          setHasIntersectedOnce(true);
          return;
        }

        if (images?.meta.count && imagesLimit >= images.total) return;

        dispatch(setImagesLimit(imagesLimit + 50));
        setHasIntersectedOnce(false); // сбрасываем, чтобы можно было подгрузить снова
      }
    },
    [dispatch, hasIntersectedOnce]
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

  // useEffect(() => {
  //   // сбрасываем флаг при подгрузке новых изображений
  //   setHasIntersectedOnce(false);
  // }, [images]);

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
