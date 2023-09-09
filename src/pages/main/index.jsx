import { Navigate, Route, Routes } from "react-router-dom";
import { HomeContainer } from "./index.styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthProvider";
import { BasicDetailsContext } from "../../contexts/common/BasicDetailsProvider";
import Home from "./home/Home";

const Main = () => {
  const { authState } = useContext(AuthContext);
  const { isAuthenticated } = authState;
  const { basicDetails } = useContext(BasicDetailsContext);
  const { username } = basicDetails;

  return (
    <>
      <Navigate
        to={isAuthenticated ? `/${username}` : "/auth"}
        replace={true}
      />
      <HomeContainer>
        <Routes>
          <Route path={`${username}`} element={<Home />} />
        </Routes>
      </HomeContainer>
    </>
  );
};

export default Main;
