import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProviders from "./providers/AuthProviders.jsx";
import routes from "./routes/MainRoutes.jsx";
import { HelmetProvider } from "react-helmet-async";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={client}>
        <AuthProviders>
          <RouterProvider router={routes} />
        </AuthProviders>
      </QueryClientProvider>
      <Toaster />
    </HelmetProvider>
  </React.StrictMode>
);
