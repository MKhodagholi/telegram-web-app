import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// replace console.* for disable log on production
// if (process.env.NODE_ENV === "production") {
//   console.log = () => {};
//   console.error = () => {};
//   console.debug = () => {};
// }

const app = document.getElementById("app");

const root = createRoot(app);

root.render(<App />);
