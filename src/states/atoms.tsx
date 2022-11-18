import React from 'react';
import { atom } from 'recoil';

const jwtTokenState = atom({
  key: 'jwttoken',
  default: '',
});

const loginState = atom({
  key: 'login',
  default: 'unknown',
});

const usernameState = atom({
  key: 'username',
  default: 'unknown',
});

const tokenLoadingState = atom({
  key: 'tokenLoading',
  default: false,
});
export { jwtTokenState, loginState, usernameState, tokenLoadingState };
