import {
  Main,
  ModeSelect,
  MemberHome,
  FindID,
  FindPW,
  Login,
  SignUp,
} from '../pages';

const Router = [
  {
    title: 'Start',
    url: '/',
    component: <Main />,
  },
  {
    title: 'Login',
    url: '/login',
    component: <Login />,
  },
  {
    title: 'Find ID',
    url: '/findid',
    component: <FindID />,
  },
  {
    title: 'Find PW',
    url: '/findpw',
    component: <FindPW />,
  },
  {
    title: 'Sign Up',
    url: '/signup',
    component: <SignUp />,
  },
  {
    title: 'Select Mode',
    url: '/mode',
    component: <ModeSelect />,
  },
];

export default Router;
