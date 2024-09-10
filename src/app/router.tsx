import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "@/routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
