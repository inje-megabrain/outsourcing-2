import React from 'react';
import { Input, Button } from '../../components';

const InputEmail = () => {
  const onButtonClick = () => {};
  return (
    <>
      <p className="text-xl text-center my-7">
        가입하신 이메일을 입력해주세요
        <br />
        이메일 인증을 통해 비밀번호를 변경합니다.
      </p>
      <Input type="email" placeholder="이메일 입력" />
      <Button className="mt-7" onClick={onButtonClick}>
        이메일 인증
      </Button>
    </>
  );
};

export default InputEmail;
