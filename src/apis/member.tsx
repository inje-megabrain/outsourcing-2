import React from 'react';
import { API_URL } from '../constants/constants';
import { httppost } from './api';

const memberurl = '/member';

const getall: string = memberurl + '/all';
const newadmin: string = memberurl + '/new/admin';
const signup: string = memberurl + '/signup';
const changepassword: string = memberurl + '/password';

type changePWType = {
  password: string;
  username: string;
};

const changePWAPI = (id: string, data: changePWType) =>
  httppost(API_URL + id + changepassword, data);

export { changePWAPI };
