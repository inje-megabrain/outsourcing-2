import React from 'react';
import { Button } from '../../components';

const CompleteChange = () => {
  return (
    <>
      <p className="text-xl text-center my-7">비밀번호가 재설정되었습니다</p>
      <Button className="mt-10" to="/login">
        로그인
      </Button>
    </>
  );
};

export default CompleteChange;
