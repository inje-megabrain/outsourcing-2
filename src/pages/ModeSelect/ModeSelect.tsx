import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Footer, NavBar } from '../../components';
import IconDashboard from '../../assets/icon_dashboard.png';
import IconTraining from '../../assets/icon_training.png';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../../states/atoms';

const ModeSelect = () => {
  const name = useRecoilValue(usernameState);
  return (
    <>
      <NavBar linktext="HOME" to="/" />
      <div className="max-w-xl">
        <h1 className="text-5xl text-center font-bold mb-8 text-primary-blue">
          플레이어 모드
        </h1>
        <p className="text-2xl text-center my-7">
          안녕하세요, {name}님!
          <br />
          플레이어 모드에 오신 것을 환영합니다.
          <br />
          원하시는 메뉴를 선택하세요.
        </p>
        <div className="grid grid-cols-2 gap-4 place-content-between mt-10">
          <Link
            to="/mode/start"
            className="bg-primary-blue py-12 px-14 rounded-[14px]"
          >
            <img src={IconTraining} className="w-[178px] h-[178px]" />
            <p className="text-2xl text-center my-7 text-white">
              도장 훈련 시작
            </p>
          </Link>
          <Link
            to="/user/results"
            className="bg-primary-blue py-12 px-14 rounded-[14px]"
          >
            <img src={IconDashboard} className="w-[178px] h-[178px]" />
            <p className="text-2xl text-center my-7 text-white">
              개인 기록 조회
            </p>
          </Link>
        </div>
      </div>
      <Footer absolute />
    </>
  );
};

export default ModeSelect;
