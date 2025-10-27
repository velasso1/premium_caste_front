import { FC, useCallback, useRef, useEffect } from "react";

import PreviewItem from "./preview-item";

import { IGetAllImagesResponse } from "#types/api-types/api-response-types.ts";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import { setImagesLimit } from "../../../../store/slices/user";
import { useAppDispatch, useAppSelector } from "../../../../store";

interface IPreviewContainerProps {
  creatingStep: number;
  images: IGetAllImagesResponse | undefined;
  postInfo: IPostInfoPayload;
  setPostInfo: (arg: IPostInfoPayload) => void;
  userId: string;
}

const PreviewContainer: FC<IPreviewContainerProps> = ({ creatingStep, images, postInfo, setPostInfo, userId }) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { imagesLimit } = useAppSelector((state) => state.userSlice);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    if (entry.isIntersecting) {
      dispatch(setImagesLimit(imagesLimit + 50));
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const options = {
        root: containerRef.current,
        rootMargin: "20px",
        threshold: 1.0,
      };

      observerRef.current = new IntersectionObserver(handleObserver, options);

      // Наблюдаем за последним элементом в контейнере
      const lastChild = containerRef.current.lastElementChild;
      if (lastChild) {
        observerRef.current.observe(lastChild);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleObserver]);

  return (
    <>
      {creatingStep === 1 && (
        <div className="create-blog-post-page__upload-container">
          Выберите превью для поста
          <div className="create-blog-post-page__preview-container" ref={containerRef}>
            {images?.data ? (
              images?.data.map((item, index) => {
                return (
                  <PreviewItem key={index} item={item} postInfo={postInfo} setPostInfo={setPostInfo} userId={userId} />
                );
              })
            ) : (
              <div>Пока что картинок нет</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewContainer;
