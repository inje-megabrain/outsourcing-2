import axios from 'axios';
import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../constants/Constants';

const memberurl = '/member';

const getall: string = memberurl + '/all';
const newadmin: string = memberurl + '/new/admin';
const signup: string = memberurl + '/signup';
const findid: string = memberurl + '/find/id';
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
    toast.error(error.response.data);
  } else if (error.request) {
    toast.error(error.request);
  } else {
    toast.error(error.message);
  }
};

// const changePWAPI = (id: string, data: changePWType) =>
//   httppost(API_URL + id + changepassword, data);

const signUpAPI = (data: object, navigate: NavigateFunction) => {
  axios
    .post(API_URL + signup, data, {
      data: data,
      headers: headerConfig,
    })
    .then((response) => {
      navigate('/signup/complete', { state: response.data});
    })
    .catch((error) => {
      handleError(error);
    });
};

const findIdAPI = (
  data: object,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
) => {
  axios
    .post(API_URL + findid, data, {
      params: data,
      headers: headerConfig,
    })
    .then((response) => {
      setUsername(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

export { signUpAPI, findIdAPI };
