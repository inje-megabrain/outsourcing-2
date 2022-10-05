import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Button, MemberContainer } from '../../components';

const Main = () => (
  <MemberContainer>
    <img className="mx-auto" src={Logo} />
    <p className="text-xl text-center my-7">
      환영합니다.
      <br />본 프로그램은 선박 도장 훈련을 목적으로 설계되었습니다.
    </p>
    <Button to="/login">시작하기</Button>
  </MemberContainer>
);
export default Main;
