import React from 'react';
import Logo from '../../assets/logo.svg';

const Main = () => (
  <div className="flex place-content-center items-center h-full w-full bg-[#F5F6F9]">
    <div className="mx-auto justify-items-start">
      <img src={Logo} />
      <p className="text-xl text-center">
        환영합니다.
        <br />본 프로그램은 선박 도장 훈련을 목적으로 설계되었습니다.
      </p>
      <button className="bg-primary-blue mt-20 -rounded-lg w-full text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">
        시작하기
      </button>
    </div>
  </div>
);
export default Main;
