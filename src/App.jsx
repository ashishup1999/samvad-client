import AuthProvider from "./contexts/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import ScreenSizeProvider from "./contexts/common/ScreenSizeProvider";
import BasicDetailsProvider from "./contexts/common/BasicDetailsProvider";
import SocketProvider from "./contexts/common/SocketProvider";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <SocketProvider>
          <BasicDetailsProvider>
            <ScreenSizeProvider>
              <RouterProvider router={router} />
            </ScreenSizeProvider>
          </BasicDetailsProvider>
        </SocketProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
