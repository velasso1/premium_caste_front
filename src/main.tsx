import React from "react";
import ReactDom from "react-dom";

import { createRoot } from "react-dom/client";
import "./app/scss/main.scss";

import App from "./app/App.tsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store/index.ts";

//
// import ymaps3 from "@yandex/ymaps3-types";
// const [ymaps3React] = await Promise.all([ymaps3.import("@yandex/ymaps3-reactify"), ymaps3.ready]);

// export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);
// export const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = reactify.module(ymaps3);

//

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
