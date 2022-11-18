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
  AllResults,
  AllMembers,
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
    role: 'ROLE_USER',
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
    role: 'ROLE_ADMIN',
  },
  {
    title: 'Admin Results',
    url: 'admin/results',
    component: <AllResults />,
    role: 'ROLE_ADMIN',
  },
  {
    title: 'Admin Players',
    url: 'admin/players',
    component: <AllMembers />,
    role: 'ROLE_ADMIN',
  },
  {
    title: '개인 기록 조회',
    url: 'user/results',
    component: <MemberRecord />,
    role: 'ROLE_USER',
  },
  {
    title: '개인 기록 조회',
    url: 'user/results/:date',
    component: <DayView />,
    role: 'ROLE_USER',
  },
  {
    title: '훈련 상세 기록',
    url: 'user/results/detail/:recordid',
    component: <DetailView />,
    role: 'ROLE_USER',
  },
  {
    title: '그래프 기록',
    url: 'user/results/graph',
    component: <GraphView />,
    role: 'ROLE_USER',
  },
];

export default Router;
