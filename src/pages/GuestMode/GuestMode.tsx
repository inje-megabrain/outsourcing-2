import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Button, Input } from '../../components';

const GuestMode = () => {
  const navigate = useNavigate();
  const onNextButtonClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="mx-auto justify-items-start">
      <img className="mx-auto" src={Logo} />
      <h1 className="text-3xl text-center font-bold">게스트 모드</h1>
      <p className="text-xl text-center my-7">어떤 이름으로 체험하시겠어요?</p>
      <Input type="text" placeholder="이름 입력" />
      <Button className="mt-7" onClick={onNextButtonClick}>
        다음
      </Button>
    </div>
  );
};

export default GuestMode;
