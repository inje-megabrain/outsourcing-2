import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Footer } from '../../components';
import IconPlayer from '../../assets/icon_player.png';
import IconResult from '../../assets/icon_result.png';
import { useRecoilValue } from 'recoil';
import { usernameState } from '../../states/atoms';

const AdminModeSelect = () => {
  const name = useRecoilValue(usernameState);
  return (
    <>
      <div className="max-w-xl">
        <h1 className="text-5xl text-center font-bold mb-8 text-primary-blue">
          관리자 모드
        </h1>
        <p className="text-2xl text-center my-7">
          안녕하세요, {name}님!
          <br />
          관리자 모드에 오신 것을 환영합니다.
          <br />
          원하시는 메뉴를 선택하세요.
        </p>
        <div className="grid grid-cols-2 gap-4 place-content-between mt-10">
          <Link
            to="/admin/results"
            className="bg-primary-blue py-12 px-14 rounded-[14px]"
          >
            <img src={IconResult} className="w-[178px] h-[178px]" />
            <p className="text-2xl text-center mt-7 text-white">
              전체 기록 조회
            </p>
          </Link>
          <Link
            to="/admin/players"
            className="bg-primary-blue py-12 px-14 rounded-[14px]"
          >
            <img src={IconPlayer} className="w-[178px] h-[178px]" />
            <p className="text-2xl text-center mt-7 text-white">
              플레이어 관리
            </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminModeSelect;
