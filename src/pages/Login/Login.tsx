import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginAPI } from '../../apis/auth';
import {
  Button,
  ErrorMessage,
  Input,
  MemberContainer,
  NavBar,
} from '../../components';
import { jwtTokenState, loginState, usernameState } from '../../states/atoms';
import formSchema from './formSchema';

type FormValues = {
  username: string;
  password: string;
};

const Login = () => {
  const setUsername = useSetRecoilState(usernameState);
  const [login, setLogin] = useRecoilState(loginState);
  const setToken = useSetRecoilState(jwtTokenState);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (login === 'ROLE_USER') navigate('/mode');
    else if (login === 'ROLE_ADMIN') navigate('/admin');
  }, []);

  const onGuestModeButtonClick = (e: any) => {
    navigate('/guest');
  };

  const onSubmitLogin: SubmitHandler<FormValues> = async (data) => {
    loginAPI(data, setUsername, setLogin, setToken, navigate);
  };

  return (
    <>
      <NavBar to="/" />
      <MemberContainer>
        <h1 className="text-5xl text-center font-extrabold mb-[43px] mt-3">
          로그인
        </h1>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <Input
            type="text"
            placeholder="아이디 입력"
            className="mb-2"
            error={errors.username}
            {...register('username')}
          />
          <Input
            type="password"
            placeholder="비밀번호 입력"
            error={errors.password}
            {...register('password')}
          />
          {(errors.username || errors.password) && (
            <ErrorMessage>
              {errors.username?.message || errors.password?.message}
            </ErrorMessage>
          )}
          <h6 className="text-xl text-right my-7 font-normal">
            <Link className="underline" to="/findid">
              아이디
            </Link>{' '}
            또는{' '}
            <Link className="underline" to="/findpw">
              비밀번호 찾기
            </Link>
          </h6>
          <Button type="submit" disabled={isSubmitting} className="mb-2">
            로그인
          </Button>
        </form>
        <Button className="mb-2" onClick={onGuestModeButtonClick}>
          게스트 모드
        </Button>
        <Link to="/signup">
          <h6 className="text-xl underline text-center mt-[85px] font-normal">
            회원가입
          </h6>
        </Link>
      </MemberContainer>
    </>
  );
};
export default Login;
