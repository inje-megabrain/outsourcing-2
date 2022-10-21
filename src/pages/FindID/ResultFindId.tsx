import React from 'react';
import { Button } from '../../components';

const ResultFindId = () => {
  let userid = 'SIMGXR';
  return (
    <>
      <p className="text-2xl text-center my-7">
        입력한 정보와 일치하는 아이디를
        <br />
        확인해주세요
      </p>
      <h1 className="text-3xl text-center font-bold">{userid}</h1>
      <div className="grid grid-cols-2 gap-4 place-content-between mt-5">
        <Button>비밀번호 찾기</Button>
        <Button>로그인</Button>
      </div>
    </>
  );
};

export default ResultFindId;
