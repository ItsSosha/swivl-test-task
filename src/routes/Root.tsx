import { MainLayout } from "@/components/layout";
import { LoaderFallback } from "@/components/widgets";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const RootRoute = () => (
  <MainLayout>
    <Suspense fallback={<LoaderFallback />}>
      <Outlet />
    </Suspense>
  </MainLayout>
);
