import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProviders from "./providers/AuthProviders.jsx";
import routes from "./routes/MainRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routes}/>
    </AuthProviders>
    <Toaster/>
  </React.StrictMode>
);
