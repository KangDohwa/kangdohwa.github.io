import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, HashRouter } from "react-router-dom";
import "@src/Style.scss";
import App from "@src/App";
import reportWebVitals from "@src/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
    {/* <HashRouter> */}
      <App />
    {/* </HashRouter> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
