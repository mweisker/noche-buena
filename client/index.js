import React from 'react';
import { createRoot } from "react-dom/client";
import App from "../client/components/App";

// TODO: create and import styles like so -> import styles from './scss/application.scss';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <App />
);