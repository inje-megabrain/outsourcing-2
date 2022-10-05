import React from 'react';
import { Button } from '../../components';

const CompleteSignup = () => {
  const name = '나루피님(simgxr)';
  return (
    <>
      <p className="text-xl text-center my-7">
        {name}님의 회원가입이 성공적으로 완료되었습니다.
        <br />
        지금 바로 도장 훈련을 시작하세요.
      </p>
      <Button className="mt-10" to="/login">
        로그인
      </Button>
    </>
  );
};

export default CompleteSignup;
