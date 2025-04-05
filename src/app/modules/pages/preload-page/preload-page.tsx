import { FC, useState, useLayoutEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { routes } from "../../../utils/routes/main-routes/main-routes";

import preloadLogo from "#images/preload-page-logo.png";

const PreloadPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [preloadingClosed, setPreloadingClosed] = useState<boolean>(false);
  const [renderIsStopped, setRenderStopped] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (location.pathname !== "/") {
      setRenderStopped(true);
    }
  }, []);

  return renderIsStopped ? null : (
    <div className={`preloading-page ${preloadingClosed && "preloading__closed"}`}>
      <img className="preloading-page__logo" src={preloadLogo} alt="premium caste" />
      <button
        className="preloading-page__start-button"
        onClick={() => {
          setPreloadingClosed(true);
          navigate(`./${routes.GENERAL_PAGE}`);
        }}
      >
        Преобразить автомобиль
      </button>
    </div>
  );
};

export default PreloadPage;
