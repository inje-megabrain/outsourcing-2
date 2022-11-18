import React from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'yup';
import { Button } from '../../components';

interface Props {
  username: string;
}
const ResultFindId: React.FC<Props> = ({ username }) => {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-[32px] font-normal text-center my-[61px]">
        입력한 정보와 일치하는 아이디를
        <br />
        확인해주세요
      </p>
      <h1 className="text-[32px] text-center font-bold mb-[87px]">
        {username}
      </h1>
      <div className="grid grid-cols-2 gap-3 place-content-between mt-5">
        <Button className="w-[217px]" onClick={() => navigate('/findpw')}>
          비밀번호 찾기
        </Button>
        <Button className="w-[217px]" onClick={() => navigate('/login')}>
          로그인
        </Button>
      </div>
    </>
  );
};

export default ResultFindId;
