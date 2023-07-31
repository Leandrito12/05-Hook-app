import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/08-useReducer/intro-Reducer";
import { MultipleCustomHooks } from "./components/03-examples/multipleCustomHooks/MultipleCustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MultipleCustomHooks />
  </BrowserRouter>
);
