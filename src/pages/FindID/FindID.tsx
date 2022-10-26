import React from 'react';
import Logo from '../../assets/logo.png';
import { Button, Input, MemberContainer, NavBar } from '../../components';
import InputEmail from './InputEmail';
import ResultFindId from './ResultFindId';

const FindID = () => {
  return (
    <>
      <NavBar linktext="돌아가기" to="/login" />
      <MemberContainer>
        <h1 className="text-3xl text-center font-bold mb-8">아이디 찾기</h1>
        <InputEmail />
      </MemberContainer>
    </>
  );
};

export default FindID;
