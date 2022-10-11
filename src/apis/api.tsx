import React from 'react';
import axios from 'axios';

const httpget = async (apiurl: string, param?: object) =>
  await axios
    .get(apiurl, { params: param })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httppost = async (apiurl: string, data?: object) =>
  await axios
    .post(apiurl, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httpput = async (apiurl: string, data?: object) =>
  await axios
    .put(apiurl, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httpdelete = async (apiurl: string, param?: any) =>
  await axios
    .delete(apiurl, { params: param })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export { httpget, httppost, httpput, httpdelete };
