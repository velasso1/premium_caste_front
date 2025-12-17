// import { FC, useState, useEffect, useRef, useCallback } from "react";

// import { IGetAllImagesResponse } from "#types/api-types/api-response-types.ts";
// import { useAppDispatch, useAppSelector } from "../../../../store";
// import { selectImagesForPost } from "../../../../store/slices/posts";
// import { setImagesLimit } from "../../../../store/slices/user";

// import PreviewItem from "./preview-item";

// interface IAttachImagesProps {
//   images: IGetAllImagesResponse | undefined;
//   userId: string;
//   saveTarget: "id" | "storage_path";
// }

// const AttachImages: FC<IAttachImagesProps> = ({ images, userId, saveTarget = "id" }) => {
//   const dispatch = useAppDispatch();

//   const containerRef = useRef<HTMLDivElement>(null);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   const { attachedImages } = useAppSelector((state) => state.postsSlice);
//   const { imagesLimit } = useAppSelector((state) => state.userSlice);

//   const [hasIntersectedOnce, setHasIntersectedOnce] = useState(false);

//   const handleObserver = useCallback(
//     (entries: IntersectionObserverEntry[]) => {
//       if (!images) return;

//       const [entry] = entries;

//       // сбрасываем флаг, когда элемент выходит из области видимости
//       if (!entry.isIntersecting) {
//         if (hasIntersectedOnce) setHasIntersectedOnce(false);
//         return;
//       }

//       // проверяем, загружены ли все изображения (берём total если есть, иначе meta.count)
//       const totalAvailable = images.total ?? images?.meta.count ?? 0;
//       if (totalAvailable && imagesLimit >= totalAvailable) return;

//       // не даём стрелять повторно, пока не выйдем из области видимости или не загрузим новые данные
//       if (hasIntersectedOnce) return;

//       setHasIntersectedOnce(true);
//       dispatch(setImagesLimit(imagesLimit + 50));
//     },
//     [dispatch, hasIntersectedOnce, images, imagesLimit]
//   );

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const options = {
//       root: containerRef.current,
//       rootMargin: "20px",
//       threshold: 1.0,
//     };

//     const observer = new IntersectionObserver(handleObserver, options);
//     observerRef.current = observer;

//     const lastChild = containerRef.current.lastElementChild;
//     if (lastChild) observer.observe(lastChild);

//     return () => {
//       observer.disconnect();
//     };
//   }, [handleObserver, images]);

//   useEffect(() => {
//     // сбрасываем флаг при подгрузке новых изображений
//     setHasIntersectedOnce(false);
//   }, [images]);

//   // сбрасываем limitImages до 50
//   useEffect(() => {
//     return () => {
//       dispatch(setImagesLimit(50));
//     };
//   }, []);

//   return (
//     <div className="create-blog-post-page__upload-container">
//       Прикрепите набор картинок
//       <div className="create-blog-post-page__preview-container" ref={containerRef}>
//         {images && images?.data.length ? (
//           images?.data.map((item) => {
//             return (
//               <PreviewItem
//                 onClick={() => dispatch(selectImagesForPost(item[`${saveTarget}`]))}
//                 item={item}
//                 userId={userId}
//                 isSelected={attachedImages.includes(item[`${saveTarget}`])}
//                 key={item.id}
//               />
//             );
//           })
//         ) : (
//           <div>Пока что картинок нет</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttachImages;

import { FC, useEffect, useRef, useCallback } from "react";

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
  // Реф для невидимого элемента-триггера внизу списка
  const triggerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { attachedImages } = useAppSelector((state) => state.postsSlice);
  const { imagesLimit } = useAppSelector((state) => state.userSlice);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      // Если элемент не в зоне видимости - выходим
      if (!target.isIntersecting) return;
      if (!images) return;

      const totalAvailable = images.total ?? images?.meta.count ?? 0;

      // Если загружать больше нечего - выходим
      if (imagesLimit >= totalAvailable) return;

      // Здесь можно добавить проверку isLoading, если она есть в стейте,
      // чтобы не отправлять запросы, пока идет предыдущий.
      // Но базовая логика работает и так:
      
      // Если длина текущего массива меньше лимита, значит мы еще грузим данные
      // (это простая защита от дублирования запросов)
      // if (images.data.length < imagesLimit) return;

      if (images.data.length < imagesLimit || images.data.length >= totalAvailable) {
        return;
      }

      dispatch(setImagesLimit(imagesLimit + 50));
    },
    [dispatch, images, imagesLimit]
  );

  useEffect(() => {
    // Наблюдаем за triggerRef, а не за lastChild
    if (!triggerRef.current) return;

    const options = {
      root: containerRef.current,
      rootMargin: "20px",
      threshold: 0.1, // Срабатываем, когда видно хотя бы 10% триггера
    };

    const observer = new IntersectionObserver(handleObserver, options);
    observerRef.current = observer;

    observer.observe(triggerRef.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [handleObserver]); // Убрали 'images' из зависимостей, чтобы не пересоздавать обсервер при каждой загрузке

  // Сбрасываем limitImages до 50 при размонтировании
  useEffect(() => {
    return () => {
      dispatch(setImagesLimit(50));
    };
  }, [dispatch]);

  return (
    <div className="create-blog-post-page__upload-container">
      Прикрепите набор картинок
      <div className="create-blog-post-page__preview-container" ref={containerRef}>
        {images && images?.data.length ? (
          <>
            {images.data.map((item) => (
              <PreviewItem
                onClick={() => dispatch(selectImagesForPost(item[`${saveTarget}`]))}
                item={item}
                userId={userId}
                isSelected={attachedImages.includes(item[`${saveTarget}`])}
                key={item.id}
              />
            ))}
            {/* Невидимый блок-триггер для подгрузки */}
            <div 
              ref={triggerRef} 
              style={{ height: "20px", width: "100%", flexShrink: 0 }} 
            />
          </>
        ) : (
          <div>Пока что картинок нет</div>
        )}
      </div>
    </div>
  );
};

export default AttachImages;