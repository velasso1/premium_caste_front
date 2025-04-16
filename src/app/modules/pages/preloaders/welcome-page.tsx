import { FC, useState, useLayoutEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { routes } from "../../../utils/routes/main-routes/main-routes";

import preloadLogo from "#images/preload-page-logo.png";

/**
 * @param {boolean} preloadingMode необходим для отображения кнопки "преобразить автомобиль" на экране загрузки
 */

interface IWelcomePageProps {
  preloadingMode: boolean;
}

const WelcomePage: FC<IWelcomePageProps> = ({ preloadingMode }) => {
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
    <div className={`welcome-page ${preloadingClosed && "welcome__closed"}`}>
      <img className="welcome-page__logo" src={preloadLogo} alt="premium caste" />
      {!preloadingMode && (
        <button
          className="welcome-page__start-button"
          onClick={() => {
            setPreloadingClosed(true);
            navigate(`./${routes.GENERAL_PAGE}`);
          }}
        >
          Преобразить автомобиль
        </button>
      )}
    </div>
  );
};

export default WelcomePage;
