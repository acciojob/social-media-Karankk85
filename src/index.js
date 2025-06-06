import { BrowserRouter } from "react-router-dom";
import { mount } from "cypress/react";

mount(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
