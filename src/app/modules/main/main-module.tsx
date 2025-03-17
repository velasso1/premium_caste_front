import { FC, useEffect } from 'react';

import { Routes, Route, Navigate, useParams } from 'react-router-dom';

// pages
import MainPage from '../pages/main-page/main-page';
import ServicesPage from '../pages/services-page/services-page';

// ui
import Header from '../ui/header/header';
import Footer from '../ui/footer/footer';

// utils
import { routes } from '../../utils/routes/main-routes/main-routes';

const MainModule: FC = () => {
  const params = useParams<string>();

  console.log(params);

  useEffect(() => {}, []);

  return (
    <div className="">
      <Header />
      <div className="container">
        <Routes>
          <Route path={routes.GENERAL_PAGE} element={<MainPage />} />
          <Route path={routes.SERVICES_PAGE} element={<ServicesPage />} />
          {/* <Route path="*" element={<Navigate to={routes.WELCOME_PAGE} />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainModule;
