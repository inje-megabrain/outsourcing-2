import React from 'react';

import Logo from '../../assets/logo.png';
import { MemberContainer } from '../../components';
import InputEmail from './InputEmail';

const FindPW = () => {
  return (
    <MemberContainer>
      <img className="mx-auto" src={Logo} />
      <h1 className="text-3xl text-center font-bold mb-8">비밀번호 찾기</h1>
      <InputEmail />
    </MemberContainer>
  );
};

export default FindPW;
