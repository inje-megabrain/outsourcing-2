import React from 'react';
import { Button, Input } from '../../components';

const ChangePW = () => {
  return (
    <>
      <Input type="password" className="mb-1" placeholder="새로운 비밀번호 입력" />
      <Input type="password" className="mb-7" placeholder="비밀번호 재입력" />
      <Button>비밀번호 변경</Button>
    </>
  );
};

export default ChangePW;
