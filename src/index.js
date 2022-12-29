import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "normalize.css";
import "./assets/styles/index.css";
import "./utils/i18n";
import "@/assets/styles/index.css";
import "swiper/css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
