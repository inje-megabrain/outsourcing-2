import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

const CompleteChange = () => {
  return (
    <>
      <p className="text-2xl text-center my-7">비밀번호가 재설정되었습니다</p>
      <Link className="mt-10" to="/login">
        <Button>로그인</Button>
      </Link>
    </>
  );
};

export default CompleteChange;
