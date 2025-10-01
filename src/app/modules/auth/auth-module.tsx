import { FC } from "react";

import { Routes, Route } from "react-router-dom";

import LoginForm from "#auth/components/login-form/login-form.tsx";
import RegistrationForm from "#auth/components/registration-form/registration-form.tsx";

import { routes } from "#utils/routes/main-routes/main-routes.ts";

const AuthModule: FC = () => {
  return (
    <Routes>
      <Route path={routes.LOGIN_PAGE} element={<LoginForm />} />
      <Route path={routes.REGISTRATION_PAGE} element={<RegistrationForm />} />
    </Routes>
  );
};

export default AuthModule;
