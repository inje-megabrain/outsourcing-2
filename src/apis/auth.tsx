import React from 'react';
import { API_URL } from '../constants/constants';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SetterOrUpdater } from 'recoil';

const login: string = '/authenticate';
const mail: string = '/mail';
const mailcheck: string = '/mailcheck';

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
};

const handleError = (error: any) => {
  console.log(error);
  if (error.response) {
    toast(error.response.data);
  } else if (error.request) {
    toast(error.request);
  } else {
    toast(error.message);
  }
};

const loginAPI = (
  data: loginType,
  usernameHook: SetterOrUpdater<string>,
  loginStateHook: SetterOrUpdater<string>,
  navigate: NavigateFunction,
) => {
  axios
    .post(API_URL + login, null, {
      params: data,
      headers: headerConfig,
    })
    .then((response) => {
      const decoded: token = jwtDecode(response.data.token);
      usernameHook(decoded.sub);
      if (decoded.auth.includes('ROLE_ADMIN')) {
        loginStateHook('admin');
        navigate('/admin');
      } else if (decoded.auth.includes('ROLE_USER')) {
        loginStateHook('user');
        navigate('/mode');
      }
    })
    .catch((error) => {
      handleError(error);
    });
};

const mailAPI = (data: emailType) => {
  // httpget(API_URL + mail, data);
};

const mailcheckAPI = (data: emailCheckType) => {
  // httpget(API_URL + mailcheck, data);
};

export { loginAPI, mailAPI, mailcheckAPI };
