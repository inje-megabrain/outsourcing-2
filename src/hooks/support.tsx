import React from 'react';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';

const isUser = (
  state: 'default' | 'user' | 'admin' | 'guest',
  navigate: NavigateFunction,
) => {
  if (state === 'user') navigate('/mode');
};

const isAdmin = (
  state: 'default' | 'user' | 'admin' | 'guest',
  navigate: NavigateFunction,
) => {
  if (state === 'admin') navigate('/admin');
};

const isGuest = (
  state: 'default' | 'user' | 'admin' | 'guest',
  navigate: NavigateFunction,
) => {
  if (state === 'guest') navigate('/mode/start');
};

const isUndefined = (
  state: 'default' | 'user' | 'admin' | 'guest',
  navigate: NavigateFunction,
) => {
  if (state === 'default') navigate('/');
};

const UserOnly = () => {
  isGuest;
  isUndefined;
};

const AdminOnly = () => {
  isUser;
  isGuest;
  isUndefined;
};

const GuestOnly = () => {
  isUser;
  isAdmin;
  isUndefined;
};

export {
  isUser,
  isAdmin,
  isGuest,
  isUndefined,
  UserOnly,
  AdminOnly,
  GuestOnly,
};
