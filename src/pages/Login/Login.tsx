import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Button } from '../../components';

const Login = () => {
  const navigate = useNavigate();
  const onLoginButtonClick = (e: any) => {
    navigate('/play/mode-select');
  };
  const onGuestModeButtonClick = (e: any) => {};
  return (
    <div className="mx-auto justify-items-start">
      <img className="mx-auto mb-4" src={Logo} />
      <input
        className="border-solid border-2 rounded-lg border-indigo-600 w-full py-4 px-4 font-medium -rounded-lg mt-5 h-15"
        type="text"
        placeholder="아이디 입력"
      />
      <input
        className="border-solid border-2 rounded-lg border-indigo-600 w-full py-4 px-4 font-medium -rounded-lg mt-2 h-15"
        type="password"
        placeholder="비밀번호 입력"
      />
      <Button
        onClick={onLoginButtonClick}
        className="bg-primary-blue mt-10 -rounded-lg w-full text-white text-sm leading-6 font-medium py-4 px-4 h-15 rounded-lg"
      >
        로그인
      </Button>
      <Button
        onClick={onGuestModeButtonClick}
        className="bg-primary-blue mt-1 -rounded-lg w-full text-white text-sm leading-6 font-medium py-4 px-4 h-15 rounded-lg"
      >
        게스트 모드
      </Button>
    </div>
  );
};
export default Login;
