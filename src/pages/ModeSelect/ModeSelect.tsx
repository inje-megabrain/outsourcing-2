import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Footer, NavBar } from '../../components';
import IconDashboard from '../../assets/icon_dashboard.png';
import IconTraining from '../../assets/icon_training.png';
import { useRecoilValue } from 'recoil';
import { tokenLoadingState, usernameState } from '../../states/atoms';

const ModeSelect = () => {
  const name = useRecoilValue(usernameState);
  const tokenLoading = useRecoilValue(tokenLoadingState);
  return (
    tokenLoading && (
      <>
        <NavBar linktext="HOME" to="/" />
        <div className="max-w-2xl items-center flex flex-col justify-center">
          <h1 className="text-5xl text-center font-extrabold mb-8 text-primary-blue leading-[58.09px]">
            플레이어 모드
          </h1>
          <p className="text-[32px] text-center mt-[46px] mb-[74px] font-normal leading-[38.73px] w-max">
            안녕하세요, {name}님!
            <br />
            플레이어 모드에 오신 것을 환영합니다.
            <br />
            원하시는 메뉴를 선택하세요.
          </p>
          <div className="flex flex-row mt-10 w-[644px]">
            <Link
              to="/mode/start"
              className="bg-primary-blue py-12 px-14 rounded-[14px] w-[300px] mr-[44px] text-center flex flex-col justify-center items-center"
            >
              <img src={IconTraining} className="w-[178px] h-[178px]" />
              <p className="text-[32px] text-center  text-white font-medium w-max">
                도장 훈련 시작
              </p>
            </Link>
            <Link
              to="/user/results"
              className="bg-primary-blue py-12 px-14 rounded-[14px] w-[300px] text-center flex flex-col justify-center items-center"
            >
              <img src={IconDashboard} className="w-[178px] h-[178px]" />
              <p className="text-[32px] text-center text-white font-medium w-max">
                개인 기록 조회
              </p>
            </Link>
          </div>
        </div>
        <Footer absolute />
      </>
    )
  );
};

export default ModeSelect;
