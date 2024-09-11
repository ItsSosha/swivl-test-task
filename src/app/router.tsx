import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RootRoute } from "@/routes/Root";

const UserList = lazy(() => import("@/routes/users/UserList"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootRoute />,
      children: [
        {
          index: true,
          element: <Navigate to={"users"} />,
        },
        {
          path: "users",
          element: <UserList />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_BASE_URL }
);

export const AppRouter = () => <RouterProvider router={router} />;
