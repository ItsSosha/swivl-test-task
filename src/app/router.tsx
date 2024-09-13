import { lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RootRoute } from "@/routes/Root";
import { NotFound } from "@/routes/NotFound";

const UserList = lazy(() => import("@/routes/users/UserList"));
const User = lazy(() => import("@/routes/users/User"));

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
        {
          path: "users/:login",
          element: <User />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: import.meta.env.VITE_BASE_URL }
);

export const AppRouter = () => <RouterProvider router={router} />;
