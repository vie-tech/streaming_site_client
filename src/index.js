import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/joy/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StyledEngineProvider>
);
