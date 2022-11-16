import React from 'react';
import { useRecoilValue } from 'recoil';
import IconHMD from '../../assets/icon_hmd.png';
import { Footer, MemberContainer, NavBar } from '../../components';
import { usernameState } from '../../states/atoms';

const StartTraining = () => {
  const isLogin = useRecoilValue(usernameState);
  return (
    <>
      <NavBar
        linktext="돌아가기"
        to={isLogin == 'unknown' ? '/login' : '/mode'}
      />
      <div className="items-center text-center">
        <div className="grid justify-center bg-gradient-to-t w-[340px] h-[340px] from-[#015EFF] to-[#7000FF] border-8 border-white rounded-[104px] drop-shadow-[0_4px_63px_rgba(0,0,0,0.25)] items-center">
          <img className="w-[278px] h-[206px]" src={IconHMD} />
        </div>
        <p className="text-[40px] text-normal text-center mt-[66px] leading-[48.41px]">
          HMD를 착용해주세요.
        </p>
      </div>
      <Footer absolute />
    </>
  );
};

export default StartTraining;
