import React from 'react';
import { API_URL } from '../constants/Constants';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SetterOrUpdater } from 'recoil';
import {
  getCookieToken,
  removeCookieToken,
  removeRole,
  setRefreshToken,
  setRole,
} from '../util/tokenManager';

const login: string = '/authenticate';
const mail: string = '/mail';
const mailcheck: string = '/mailcheck';
const regenerateToken: string = '/regenerateToken';

type loginType = {
  username: string;
  password: string;
};

type emailType = {
  email: string;
};

type emailCheckType = {
  code: string;
  email: string;
};

type token = {
  sub: string;
  auth: string;
  exp: number;
};

const headerConfig = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  accept: '*/*',
};

const handleError = (error: any) => {
  if (error.response) {
    toast.error(error.response.data);
  } else if (error.request) {
    toast.error(error.request);
  } else {
    toast.error(error.message);
  }
};

const loginAPI = (
  data: loginType,
  usernameHook: SetterOrUpdater<string>,
  loginStateHook: SetterOrUpdater<string>,
  tokenHook: SetterOrUpdater<string>,
  navigate: NavigateFunction,
) => {
  axios
    .post(API_URL + login, null, {
      params: data,
      headers: headerConfig,
    })
    .then((response) => {
      const decoded: token = jwtDecode(response.data.accessToken);
      setRefreshToken(response.data.refreshToken, decoded.exp);
      usernameHook(decoded.sub);
      if (decoded.auth.includes('ROLE_ADMIN')) {
        loginStateHook('ROLE_ADMIN');
        setRole('ROLE_ADMIN', decoded.exp);
        navigate('/admin');
      } else if (decoded.auth.includes('ROLE_USER')) {
        loginStateHook('ROLE_USER');
        setRole('ROLE_ADMIN', decoded.exp);
        navigate('/mode');
      }
      tokenHook(response.data.accessToken.trim());
    })
    .catch((error) => {
      handleError(error);
    });
};

const mailAPI = async (
  data: emailType,
  setPwLevel: React.Dispatch<React.SetStateAction<number>>,
  setEmail?: React.Dispatch<React.SetStateAction<string>>,
) => {
  await axios
    .get(API_URL + mail, {
      params: data,
      headers: headerConfig,
    })
    .then((response) => {
      setEmail && setEmail(data.email);
      setPwLevel(1);
    })
    .catch((error) => {
      handleError(error);
    });
};

const mailcheckAPI = (
  data: emailCheckType,
  email: string,
  setPwLevel: React.Dispatch<React.SetStateAction<number>>,
) => {
  axios
    .get(API_URL + mailcheck, {
      params: { ...data, email: email },
      headers: headerConfig,
    })
    .then((response) => {
      setPwLevel(2);
    })
    .catch((error) => {
      handleError(error);
    });
};

const regenerateTokenAPI = async (
  usernameHook: SetterOrUpdater<string>,
  loginStateHook: SetterOrUpdater<string>,
  tokenHook: SetterOrUpdater<string>,
) => {
  await axios
    .post(API_URL + regenerateToken, getCookieToken(), {
      headers: { 'Content-Type': 'text/plain' },
    })
    .then((response) => {
      removeCookieToken();
      removeRole();
      const decoded: token = jwtDecode(response.data.accessToken);
      setRefreshToken(response.data.refreshToken, decoded.exp);
      usernameHook(decoded.sub);
      if (decoded.auth.includes('ROLE_ADMIN')) {
        loginStateHook('ROLE_ADMIN');
        setRole('ROLE_ADMIN', decoded.exp);
      } else if (decoded.auth.includes('ROLE_USER')) {
        loginStateHook('ROLE_USER');
        setRole('ROLE_USER', decoded.exp);
      }
      tokenHook(response.data.accessToken);
    })
    .catch((error) => {
      if (error.response) {
        removeCookieToken();
      }
      handleError(error);
      throw new error();
    });
};
export { loginAPI, mailAPI, mailcheckAPI, regenerateTokenAPI };
