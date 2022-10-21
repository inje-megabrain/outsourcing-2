import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import { API_URL } from '../constants/constants';

const memberurl = '/member';

const getall: string = memberurl + '/all';
const newadmin: string = memberurl + '/new/admin';
const signup: string = memberurl + '/signup';
const changepassword: string = memberurl + '/password';

type changePWType = {
  password: string;
  username: string;
};

const headerConfig = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const handleError = (error: any) => {
  if (error.response) {
    toast(error.response.data);
  } else if (error.request) {
    toast(error.request);
  } else {
    toast(error.message);
  }
};

// const changePWAPI = (id: string, data: changePWType) =>
//   httppost(API_URL + id + changepassword, data);

const signUpAPI = (data: object) => {
  axios
    .post(API_URL + signup, null, {
      params: data,
      headers: headerConfig,
    })
    .then((response) => {})
    .catch((error) => {
      handleError(error);
    });
};

export { signUpAPI };
