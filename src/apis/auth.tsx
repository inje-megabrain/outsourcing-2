import React from 'react';
import { API_URL } from '../constants/constants';
import { httpget, httppost } from './api';

const authurl: string = '';

const login: string = authurl + '/authenticate';
const mail: string = authurl + '/mail';
const mailcheck: string = authurl + '/mailcheck';

const loginAPI = (username: string, password: string) =>
  httppost(API_URL, login, {
    username,
    password,
  });

const mailAPI = (email: string) => httpget(API_URL, mail, { email });

const mailcheckAPI = (code: string, email: string) =>
  httpget(API_URL, mailcheck, { code, email });

export { loginAPI, mailAPI, mailcheckAPI };
