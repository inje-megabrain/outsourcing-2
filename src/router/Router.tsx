import { Main, Login, ModeSelect } from '../pages';

const Router = [
  {
    title: 'main',
    url: '/',
    component: <Main />,
  },
  {
    title: 'Login',
    url: '/login',
    component: <Login />,
  },
  {
    title: 'Select Mode',
    url: '/play/mode-select',
    component: <ModeSelect />,
  },
];

export default Router;
