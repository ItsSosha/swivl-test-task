import { ErrorBoundary } from "react-error-boundary";
import { AppProvider } from "./provider";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={() => <div>Something went wrong...</div>}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </ErrorBoundary>
  );
};
