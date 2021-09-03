import React from "react";
import ReactDOM from "react-dom";
import { BrowserView, MobileView } from "react-device-detect";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <App />
    </BrowserView>
    <MobileView>
      <h3 style={{ color: "black", margin: 20, textAlign: "center" }}>
        This site does not support mobile view yet, please visit on a desktop!
      </h3>
    </MobileView>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
