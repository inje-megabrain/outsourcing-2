import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const setRefreshToken = (refreshToken: string) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

const getCookieToken: string = cookies.get('refresh_token');

const removeCookieToken = () => {
  return cookies.remove('refresh_token', { sameSite: 'strict', path: '/' });
};

export { setRefreshToken, getCookieToken, removeCookieToken };
