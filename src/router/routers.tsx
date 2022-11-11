import {
  Main,
  ModeSelect,
  FindID,
  FindPW,
  Login,
  SignUp,
  GuestMode,
  StartTraining,
  AdminModeSelect,
  CompleteSignup,
  MemberRecord,
  DayView,
  DetailView,
  GraphView,
} from '../pages';

const Router = [
  {
    title: 'Home',
    url: '/',
    component: <Main />,
  },
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
  {
    title: '회원가입 완료',
    url: 'signup/complete',
    component: <CompleteSignup />,
  },
  {
    title: 'Select Mode',
    url: 'mode',
    component: <ModeSelect />,
  },
  {
    title: 'Guest Mode',
    url: 'guest',
    component: <GuestMode />,
  },
  {
    title: 'Start Training',
    url: 'mode/start',
    component: <StartTraining />,
  },
  {
    title: 'Admin Select',
    url: 'admin',
    component: <AdminModeSelect />,
  },
  {
    title: 'Admin Results',
    url: 'admin/results',
    component: <></>,
  },
  {
    title: 'Admin Players',
    url: 'admin/players',
    component: <></>,
  },
  {
    title: '개인 기록 조회',
    url: 'user/results',
    component: <MemberRecord />,
  },
  {
    title: '개인 기록 조회',
    url: 'user/results/:date',
    component: <DayView />,
  },
  {
    title: '훈련 상세 기록',
    url: 'user/results/detail',
    component: <DetailView />,
  },
  {
    title: '그래프 기록',
    url: 'user/results/graph',
    component: <GraphView />,
  },
];

export default Router;
