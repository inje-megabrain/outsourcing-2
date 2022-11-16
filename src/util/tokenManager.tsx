import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const setRefreshToken = (refreshToken: string, expireDate: number) => {
  return cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate * 1000),
  });
};

const setRole = (
  role: 'ROLE_ADMIN' | 'ROLE_USER' | 'ROLE_UNKNOWN',
  expireDate: number,
) => {
  return cookies.set('role', role, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate * 1000),
  });
};

const getCookieToken = () => {
  return cookies.get('refresh_token');
};

const getRole = () => {
  return cookies.get('role');
};

const removeCookieToken = () => {
  return cookies.remove('refresh_token', { sameSite: 'strict', path: '/' });
};

const removeRole = () => {
  return cookies.remove('role', { sameSite: 'strict', path: '/' });
};

export {
  setRefreshToken,
  getCookieToken,
  removeCookieToken,
  setRole,
  getRole,
  removeRole,
};
