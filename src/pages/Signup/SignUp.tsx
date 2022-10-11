import React from 'react';
import { MemberContainer } from '../../components';
import CompleteSignup from './CompleteSignup';
import Form from './Form';

const Signup = () => (
  <MemberContainer className="py-8">
    <h1 className="text-3xl text-center font-bold mb-8 mt-20">회원가입</h1>
    <Form />
  </MemberContainer>
);

export default Signup;
