import AuthProvider from "./contexts/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";
import ModalProvider from "./contexts/common/ModalProvider";
import ScreenSizeProvider from "./contexts/common/ScreenSizeProvider";
import BasicDetailsProvider from "./contexts/common/BasicDetailsProvider";

function App() {
  return (
    <div className="app">
      <BasicDetailsProvider>
        <ScreenSizeProvider>
          <AuthProvider>
            <ModalProvider>
              <RouterProvider router={router} />
            </ModalProvider>
          </AuthProvider>
        </ScreenSizeProvider>
      </BasicDetailsProvider>
    </div>
  );
}

export default App;
