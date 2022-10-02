import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Main = () => (
  <div className="mx-auto justify-items-start">
    <img src={Logo} />
    <p className="text-xl text-center">
      환영합니다.
      <br />본 프로그램은 선박 도장 훈련을 목적으로 설계되었습니다.
    </p>
    <Link to="/login">
      <button className="bg-primary-blue mt-20 -rounded-lg w-full text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
        시작하기
      </button>
    </Link>
  </div>
);
export default Main;
