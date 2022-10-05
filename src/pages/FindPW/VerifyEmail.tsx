import React from 'react';
import { Input, Button } from '../../components';

const VerifyEmail = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-2">
      <Input type="text" placeholder="인증번호 입력" className="col-span-2"></Input>
      <Button>재전송</Button>
    </div>
  );
};

export default VerifyEmail;
