import React from 'react';
import axios from 'axios';

const httpget = async (apiurl: string, apitype: string, param?: object) =>
  await axios
    .get(apiurl + apitype, { params: param })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httppost = async (apiurl: string, apitype: string, data?: object) =>
  await axios
    .post(apiurl + apitype, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httpput = async (apiurl: string, apitype: string, data?: object) =>
  await axios
    .put(apiurl + apitype, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

const httpdelete = async (apiurl: string, apitype: string, param?: any) =>
  await axios
    .delete(apiurl + apitype, { params: param })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export { httpget, httppost, httpput, httpdelete };
