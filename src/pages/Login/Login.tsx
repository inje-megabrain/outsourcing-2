import React from 'react';
import Logo from '../../assets/logo.svg';

const Login = () => (
  <div className="mx-auto justify-items-start">
    <img src={Logo} />
    <input
      className="w-full py-2 px-3 font-medium -rounded-lg mt-5"
      type="text"
    />
    <input
      className="w-full py-2 px-3 font-medium -rounded-lg mt-5"
      type="text"
    />
    <button className="bg-primary-blue mt-20 -rounded-lg w-full text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
      로그인
    </button>
    <button className="bg-primary-blue mt-20 -rounded-lg w-full text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
      게스트 모드
    </button>
  </div>
);
export default Login;
