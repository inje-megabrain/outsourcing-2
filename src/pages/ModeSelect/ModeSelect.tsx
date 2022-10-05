import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import IconDashboard from '../../assets/icon_dashboard.png';
import IconTraining from '../../assets/icon_training.png';

const ModeSelect = () => {
  const name = '나루피';
  return (
    <div className="max-w-xl">
      <h1 className="text-4xl text-center font-bold mb-8">플레이어 모드</h1>
      <p className="text-xl text-center my-7">
        안녕하세요, {name}님!
        <br />
        플레이어 모드에 오신 것을 환영합니다.
        <br />
        원하시는 메뉴를 선택하세요.
      </p>
      <div className="grid grid-cols-2 gap-4 place-content-between mt-5">
        <Link to="/mode/start" className='bg-primary-blue rounded-lg'>
          <img src={IconTraining} />
          <p className="text-xl text-center my-7 text-white">도장 훈련 시작</p>
        </Link>
        <Link to="/mode/dashboard" className='bg-primary-blue rounded-lg'>
          <img src={IconDashboard} />
          <p className="text-xl text-center my-7 text-white">개인 기록 조회</p>
        </Link>
      </div>
    </div>
  );
};

export default ModeSelect;
