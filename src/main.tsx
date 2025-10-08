import { Profiler } from "react";

import { createRoot } from "react-dom/client";
import "./app/scss/main.scss";

import App from "./app/App.tsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
