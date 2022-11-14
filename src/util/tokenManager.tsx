import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const setRefreshToken = (refreshToken: string, expireDate: number) => {
  return cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

const getCookieToken = () => {
  return cookies.get('refresh_token');
};

const removeCookieToken = () => {
  return cookies.remove('refresh_token', { sameSite: 'strict', path: '/' });
};

export { setRefreshToken, getCookieToken, removeCookieToken };
