import { FC } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

// modules
import MainModule from './modules/main/main-module';

// pages
import PreloadPage from './modules/pages/preload-page/preload-page';

// utils
import { routes } from './utils/routes/main-routes/main-routes';

const App: FC = () => {
  return (
    <Routes>
      <Route path={routes.WELCOME_PAGE} element={<PreloadPage />} />
      <Route path={routes.MAIN_MODULE} element={<MainModule />} />
      <Route
        path={routes.NOT_EXIST_PAGE}
        element={<Navigate to={routes.WELCOME_PAGE} />}
      />
    </Routes>
  );
};

export default App;
