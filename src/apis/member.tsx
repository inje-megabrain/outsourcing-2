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
const changepassword: string = memberurl + '/find/password';

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
      navigate('/signup/complete', { state: response.data });
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

const newPasswordAPI = (
  data: object,
  email: string,
  setPwLevel: React.Dispatch<React.SetStateAction<number>>,
) => {
  axios
    .post(
      API_URL + changepassword,
      { ...data, email: email },
      {
        data: { ...data, email: email },
        headers: headerConfig,
      },
    )
    .then((response) => {
      setPwLevel(3);
    })
    .catch((error) => {
      handleError(error);
    });
};

const memberAllAPI = async (
  page: number,
  size: number,
  token: string,
  setData: React.Dispatch<React.SetStateAction<[] | undefined>>,
) => {
  await axios
    .get(API_URL + getall, {
      params: { page, size },
      headers: { ...headerConfig, Authorization: 'Bearer ' + token },
    })
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      handleError(error);
    });
};

export { signUpAPI, findIdAPI, newPasswordAPI, memberAllAPI };
