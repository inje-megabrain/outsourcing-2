import React, {
  Component,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import Router from './router/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { jwtTokenState, loginState, usernameState } from './states/atoms';
import { regenerateTokenAPI } from './apis/auth';
import { getCookieToken, getRole } from './util/tokenManager';

const App = () => {
  const [loading, setLoading] = useState(true);
  const tokenState = useRecoilValue(jwtTokenState);
  const setUsername = useSetRecoilState(usernameState);
  const [role, setRole] = useRecoilState(loginState);
  const setToken = useSetRecoilState(jwtTokenState);

  useEffect(() => {
    const callAPI = async () => {
      try {
        await regenerateTokenAPI(setUsername, setRole, setToken);
      } catch {
      } finally {
        await setLoading(false);
      }
    };
    getCookieToken() != '' &&
      (tokenState === '' || tokenState === undefined) &&
      loading &&
      callAPI();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col place-content-center items-center h-full w-full bg-[#F5F6F9] justify-center my-auto">
        <Routes>
          {Router.map((value) => (
            <Route
              path={value.url}
              element={
                value.role && !loading && value.role !== role ? (
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
