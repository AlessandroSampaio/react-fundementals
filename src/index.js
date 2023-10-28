import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/";

import GlobalStyle from './styles/global';

let root = createRoot(
    document.getElementById('root'),);

root.render(
    < >
    <GlobalStyle />
    <App />
    </>,
);