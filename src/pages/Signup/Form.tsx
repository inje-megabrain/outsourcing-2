import React from 'react';
import { Button, Input } from '../../components';

const Form = () => {
  return (
    <>
      <Input className="mb-4" placeholder="이름 입력" />
      <Input className="mb-4" placeholder="기업명 입력" />
      <Input className="mb-4" placeholder="아이디 입력" />
      <Input type="password" className="mb-4" placeholder="비밀번호 입력" />
      <Input type="password" className="mb-4" placeholder="비밀번호 재입력" />
      <Input className="mb-4" placeholder="생년월일 입력" />
      <Input type="email" className="mb-4" placeholder="이메일 입력" />
      <Button>완료</Button>
    </>
  );
};

export default Form;
