import { AppProvider } from "./provider";
import { AppRouter } from "./router";
import "@/lib/i18n";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
