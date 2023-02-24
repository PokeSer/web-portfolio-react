import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./components/Greeting/Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting name="Componente 1" />
    <Greeting />
  </>
);
