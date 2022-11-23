import { useLayoutEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { regenerateTokenAPI } from './apis/auth';
import Router from './router/routers';
import { jwtTokenState, loginState, usernameState } from './states/atoms';
import { getCookieToken } from './util/tokenManager';

const App = () => {
  const [token, setToken] = useRecoilState(jwtTokenState);
  const [loading, setLoading] = useState<boolean>(true);
  const setUsername = useSetRecoilState(usernameState);
  const [role, setRole] = useRecoilState(loginState);

  const callTokenAPI = async () => {
    await regenerateTokenAPI(setUsername, setRole, setToken);
    await setLoading(false);
  };

  useLayoutEffect(() => {
    getCookieToken() != '' && token === '' && callTokenAPI();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col place-content-center items-center h-full w-full bg-[#F5F6F9] justify-center my-auto">
        <Routes>
          {Router.map((value) => (
            <Route
              path={value.url}
              element={
                !loading &&
                value.role &&
                role !== 'ROLE_ADMIN' &&
                value.role !== role ? (
                  <Navigate to="/login" />
                ) : (
                  value.component
                )
              }
              key={value.url}
            />
          ))}
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
