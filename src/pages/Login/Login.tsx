import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Button, Input } from '../../components';

const Login = () => {
  const navigate = useNavigate();
  const onLoginButtonClick = (e: any) => {
    navigate('/mode');
  };
  const onGuestModeButtonClick = (e: any) => {
    navigate('/mode/guest');
  };
  return (
    <div className="mx-auto max-w-md justify-items-start">
      <img className="mx-auto mb-4" src={Logo} />
      <Input type="text" className="mb-2" placeholder="아이디 입력" />
      <Input type="password" placeholder="비밀번호 입력" />
      <Link to="/findid">
        <h6 className="underline text-right my-7">아이디 또는 비밀번호 찾기</h6>
      </Link>
      <Button className="mb-2" onClick={onLoginButtonClick}>
        로그인
      </Button>
      <Button className="mb-2" onClick={onGuestModeButtonClick}>
        게스트 모드
      </Button>
      <Link to="/signup">
        <h6 className="underline text-center mt-7">회원가입</h6>
      </Link>
    </div>
  );
};
export default Login;
