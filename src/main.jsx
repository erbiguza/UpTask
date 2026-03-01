import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <StrictMode>
                <App />
            </StrictMode>
        </Provider>
    </BrowserRouter>,
);
