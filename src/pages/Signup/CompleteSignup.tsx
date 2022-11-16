import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, MemberContainer, NavBar } from '../../components';
import Logo from '../../assets/logo.png';

const CompleteSignup = () => {
  const { state } = useLocation();
  const name = `${state.name}(${state.username})`;
  return (
    <>
      <NavBar linktext="돌아가기" to="/login" />
      <div className="text-center">
        <h1 className="text-5xl text-center font-bold mb-8">회원가입 완료</h1>
        <p className="text-[32px] font-normal text-center mt-[86px] mb-[103px] leading-[38.73px]">
          {name}님의 회원가입이 성공적으로 완료되었습니다.
          <br />
          지금 바로 도장 훈련을 시작하세요.
        </p>
        <Link to="/login">
          <Button className="mx-auto">로그인</Button>
        </Link>
      </div>
    </>
  );
};

export default CompleteSignup;
