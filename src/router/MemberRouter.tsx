import { FindID, FindPW, Login, ModeSelect, SignUp } from '../pages';

const MemberRouter = [
  {
    title: 'Login',
    url: 'login',
    component: <Login />,
  },
  {
    title: 'Find ID',
    url: 'findid',
    component: <FindID />,
  },
  {
    title: 'Find PW',
    url: 'findpw',
    component: <FindPW />,
  },
  {
    title: 'Sign Up',
    url: 'signup',
    component: <SignUp />,
  },
];

export default MemberRouter;
