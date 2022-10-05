import React from 'react';

import Logo from '../../assets/logo.png';
import InputEmail from './InputEmail';

const FindPW = () => {
  return (
    <div className="mx-auto max-w-md justify-items-start">
      <img className="mx-auto" src={Logo} />
      <h1 className="text-3xl text-center font-bold mb-8">비밀번호 찾기</h1>
      <InputEmail />
    </div>
  );
};

export default FindPW;
