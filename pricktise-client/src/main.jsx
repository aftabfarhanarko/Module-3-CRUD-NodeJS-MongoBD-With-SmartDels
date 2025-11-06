import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import ContextProviter from "./Context/ContextProviter.jsx";
import { router } from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProviter>
      <RouterProvider router={router}></RouterProvider>
    </ContextProviter>
  </StrictMode>
);