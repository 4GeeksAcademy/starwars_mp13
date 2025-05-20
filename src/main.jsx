import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./routes.jsx";
import { injectContext } from "./store.jsx";
import "./index.css";

const AppWithContext = injectContext(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppWithContext />
        </BrowserRouter>
    </React.StrictMode>
);
