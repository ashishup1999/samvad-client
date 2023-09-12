import AuthProvider from "./contexts/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import ModalProvider from "./contexts/common/ModalProvider";
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
              <ModalProvider>
                <RouterProvider router={router} />
              </ModalProvider>
            </AuthProvider>
          </ScreenSizeProvider>
        </BasicDetailsProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
