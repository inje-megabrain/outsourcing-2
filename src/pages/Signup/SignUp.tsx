import React from 'react';
import { MemberContainer, NavBar } from '../../components';
import CompleteSignup from './CompleteSignup';
import Form from './Form';

const Signup = () => (
  <>
    <NavBar linktext="돌아가기" to="/login" />
    <MemberContainer className="h-fit py-28">
      <h1 className="text-5xl text-center font-bold mb-[58px] mt-3">
        회원가입
      </h1>
      <Form />
    </MemberContainer>
  </>
);

export default Signup;
