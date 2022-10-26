import React, { Component, useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useNavigate,
} from 'react-router-dom';
import Router from './router/routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { jwtTokenState, loginState, usernameState } from './states/atoms';
import { regenerateTokenAPI } from './apis/auth';
import { getCookieToken } from './util/tokenManager';

const App = () => {
  const tokenState = useRecoilValue(jwtTokenState);
  const setUsername = useSetRecoilState(usernameState);
  const setLogin = useSetRecoilState(loginState);
  const setToken = useSetRecoilState(jwtTokenState);

  useLayoutEffect(() => {
    if (
      getCookieToken() != '' &&
      (tokenState === '' || tokenState === undefined)
    ) {
      regenerateTokenAPI(setUsername, setLogin, setToken);
    }
  }, [setToken]);

  return (
    <BrowserRouter>
      <div className="flex place-content-center items-center h-full w-full bg-[#F5F6F9] justify-center my-auto">
        <Routes>
          {Router.map((value) => (
            <Route path={value.url} element={value.component} key={value.url} />
          ))}
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
