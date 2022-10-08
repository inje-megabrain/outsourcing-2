import React from 'react';
import axios from 'axios';
import { alertFail } from '../hooks/support';

const httpget = async (apiurl: string, apitype: string, param?: object) =>
  await axios
    .get(apiurl + apitype, {
      params: {
        param,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alertFail(error);
    });

const httppost = async (apiurl: string, apitype: string, data?: object) =>
  await axios
    .post(apiurl + apitype, {
      data,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alertFail(error);
    });

const httpput = async (apiurl: string, apitype: string, data?: object) =>
  await axios
    .put(apiurl + apitype, {
      data,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alertFail(error);
    });

const httpdelete = async (apiurl: string, apitype: string, param?: string) =>
  await axios
    .delete(apiurl + apitype, {
      params: {
        param,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alertFail(error);
    });

export { httpget, httppost, httpput, httpdelete };
