import React from 'react';
import axios from 'axios';

const headerConfig = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const httpget = async (apiurl: string, param?: object) => {
  await axios
    .get(apiurl, {
      ...headerConfig,
      params: JSON.stringify(param),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const httppost = async (apiurl: string, data?: any) => {
  await axios
    .post(apiurl, null, {
      params: data,
      headers: headerConfig,
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

const httpput = async (apiurl: string, data?: object) =>
  await axios
    .put(apiurl, JSON.stringify(data), {
      data: JSON.stringify(data),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httpdelete = async (apiurl: string, param?: any) =>
  await axios
    .delete(apiurl, {
      ...headerConfig,
      params: JSON.stringify(param),
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export { httpget, httppost, httpput, httpdelete };
