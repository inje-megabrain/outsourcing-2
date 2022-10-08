import React from 'react';
import { httpget, httppost } from './api';
import { API_URL } from '../constants/constants';
import {
  login as loginURL,
  mail as mailURL,
  mailcheck as mailcheckURL,
} from './auth';
const authAPI = () => {
  const login: object = async (username: string, password: string) =>
    await httppost(API_URL, loginURL, {
      username,
      password,
    });

  const mail: object = async (email: string) =>
    await httpget(API_URL, mailURL, { email });

  const mailcheck: object = async (code: string, email: string) =>
    await httpget(API_URL, mailcheckURL, { code, email });
};

export { authAPI };
