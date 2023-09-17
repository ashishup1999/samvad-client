import AuthProvider from "./contexts/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import ScreenSizeProvider from "./contexts/common/ScreenSizeProvider";
import BasicDetailsProvider from "./contexts/common/BasicDetailsProvider";
import SocketProvider from "./contexts/common/SocketProvider";

function App() {
  return (
    <div className="app">
      <SocketProvider>
        <BasicDetailsProvider>
          <ScreenSizeProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ScreenSizeProvider>
        </BasicDetailsProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
