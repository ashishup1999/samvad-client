import AuthProvider from "./contexts/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import ScreenSizeProvider from "./contexts/common/ScreenSizeProvider";
import BasicDetailsProvider from "./contexts/common/BasicDetailsProvider";
import SocketProvider from "./contexts/common/SocketProvider";
import ErrorProvider from "./contexts/common/ErrorProvider";
import LoaderProvider from "./contexts/common/LoaderProvider";

function App() {
  return (
    <div className="app">
      <LoaderProvider>
        <ErrorProvider>
          <AuthProvider>
            <SocketProvider>
              <BasicDetailsProvider>
                <ScreenSizeProvider>
                  <RouterProvider router={router} />
                </ScreenSizeProvider>
              </BasicDetailsProvider>
            </SocketProvider>
          </AuthProvider>
        </ErrorProvider>
      </LoaderProvider>
    </div>
  );
}

export default App;
