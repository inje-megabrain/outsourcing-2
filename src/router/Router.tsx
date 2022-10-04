import { Main, ModeSelect, MemberHome } from '../pages';

const Router = [
  {
    title: 'Start',
    url: '/',
    component: <Main />,
  },
  {
    title: 'Member',
    url: '/member/*',
    component: <MemberHome />,
  },
  {
    title: 'Select Mode',
    url: '/mode',
    component: <ModeSelect />,
  },
];

export default Router;
