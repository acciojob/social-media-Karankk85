import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App"; // Updated path

const root = createRoot(document.getElementById("root"));
root.render(<App />);
