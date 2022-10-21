import React from 'react';
import { MemberContainer } from '../../components';
import CompleteSignup from './CompleteSignup';
import Form from './Form';
import Logo from '../../assets/logo.png';

const Signup = () => (
  <MemberContainer className="h-fit py-14">
    <img className="w-1/2 mx-auto" src={Logo} />
    <h1 className="text-5xl text-center font-bold mb-8 mt-3">회원가입</h1>
    <Form />
  </MemberContainer>
);

export default Signup;
