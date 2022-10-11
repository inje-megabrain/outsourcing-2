import React from 'react';
import { Input, Button } from '../../components';

const InputEmail = () => {
  const onButtonClick = () => {};

  return (
    <>
      <Input className="mb-2" type="text" placeholder="이름 입력" />
      <Input type="email" placeholder="이메일 입력" />
      <Button className="mt-7" onClick={onButtonClick}>
        아이디 찾기
      </Button>
    </>
  );
};

export default InputEmail;
