import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { Button, Input, MemberContainer, NavBar } from '../../components';

const GuestMode = () => {
  const navigate = useNavigate();
  const onNextButtonClick = () => {
    navigate('/mode/start');
  };

  return (
    <>
      <NavBar linktext="돌아가기" to="/login" />
      <MemberContainer>
        <h1 className="text-5xl text-center font-extrabold">게스트 모드</h1>
        <p className="text-center text-[32px] mt-[60px] mb-[96px]">
          어떤 이름으로 체험하시겠어요?
        </p>
        <Input type="text" placeholder="이름 입력" />
        <Button className="mt-[40px]" onClick={onNextButtonClick}>
          다음
        </Button>
      </MemberContainer>
    </>
  );
};

export default GuestMode;
