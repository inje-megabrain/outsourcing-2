import React from 'react';
import { API_URL } from '../constants/constants';
import { httpget, httppost } from './api';

const authurl: string = '';

const login: string = authurl + '/authenticate';
const mail: string = authurl + '/mail';
const mailcheck: string = authurl + '/mailcheck';

type loginType = {
  username: string;
  password: string;
};

const loginAPI = (data: loginType) =>
  httppost(API_URL, login, {
    data,
  });

const mailAPI = (email: string) => httpget(API_URL, mail, { email });

const mailcheckAPI = (code: string, email: string) =>
  httpget(API_URL, mailcheck, { code, email });

export { loginAPI, mailAPI, mailcheckAPI };
