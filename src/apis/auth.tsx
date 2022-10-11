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

type emailType = {
  email: string;
};

type emailCheckType = {
  code: string;
  email: string;
};

const loginAPI = (data: loginType) => httppost(API_URL, login, data);

const mailAPI = (data: emailType) => httpget(API_URL, mail, data);

const mailcheckAPI = (data: emailCheckType) =>
  httpget(API_URL, mailcheck, data);

export { loginAPI, mailAPI, mailcheckAPI };
