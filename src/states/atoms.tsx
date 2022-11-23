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

export { jwtTokenState, loginState, usernameState };
