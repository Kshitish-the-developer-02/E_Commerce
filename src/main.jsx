import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./app/Store.js";
import { Toaster } from "react-hot-toast";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hsp2l7lfslrfvqoc.us.auth0.com"
      clientId="3nORFwN6LN33FEWgemaONyXjZsO0LqJt"
       authorizationParams=
      {{
        redirect_uri: window.location.origin,
      }}
      >
      <Provider store={Store}>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
