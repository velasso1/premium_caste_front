import { Profiler } from "react";

import { createRoot } from "react-dom/client";
import "./app/scss/main.scss";

import App from "./app/App.tsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store/index.ts";

// function millisecondsToSeconds(ms: number) {
//   return (ms / 1000).toFixed(5) + " sec.";
// }

// function onRender(id: any, phase: any, actualDuration: any, baseDuration: any, startTime: any, commitTime: any) {
//   console.log("Элемент: ", id);
//   console.log("Фаза: ", phase);
//   console.log("Время отрисовки: ", millisecondsToSeconds(actualDuration));
//   console.log("Наихудшая отрисока: ", millisecondsToSeconds(baseDuration));
//   console.log("Начало обновления: ", millisecondsToSeconds(startTime));
//   console.log("Конец обновления: ", millisecondsToSeconds(commitTime));
//   console.log("Время обновления: ", millisecondsToSeconds(commitTime - startTime));
//   console.log("//////////////////////////////////");
// }

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Profiler id="App" onRender={onRender}> */}
      <App />
      {/* </Profiler> */}
    </BrowserRouter>
  </Provider>
);
