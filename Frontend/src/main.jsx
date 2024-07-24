import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Provider store={store}>
          <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
            <App />
          </div>
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
