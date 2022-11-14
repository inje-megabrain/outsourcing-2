import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AdminContainer } from '../../components';
import MasterBadge from '../../assets/master_badge.svg';
import SeniorBadge from '../../assets/senior_badge.svg';
import JuniorBadge from '../../assets/junior_badge.svg';
import PlayIcon from '../../assets/icon_viewdetail.png';

import LeftIcon1 from '../../assets/lefticon_1.png';
import LeftIcon2 from '../../assets/lefticon_2.png';
import LeftIcon3 from '../../assets/lefticon_3.png';

const DetailView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const level =
    (Number(state.score) <= 30 && 'Junior') ||
    (Number(state.score) <= 80 && 'Senior') ||
    (Number(state.score) <= 100 && 'Master');

  useEffect(() => {
    state && console.log(state);
  }, [state]);
  return (
    <AdminContainer
      title="훈련 상세 기록"
      detail="해당 훈련에 대한 상세한 기록을 볼 수 있습니다."
    >
      <div className="w-full h-full flex flex-row">
        <div className="w-2/3 h-full text-left">
          <div className="w-full flex flex-row h-3/5 space-x-8">
            <div className="w-1/3">
              <p className="text-2xl font-bold mb-5">도장레벨</p>
              <div className="w-full h-[calc(100%-52px)] bg-[#00338A] rounded-3xl p-7 flex flex-col justify-between">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[56px] font-bold text-white">
                    {state.score}
                  </p>
                  <div className="bg-white lg:px-2 2xl:px-5 py-3 rounded-[6px]">
                    <p className="text-lg">{level} Level</p>
                  </div>
                </div>
                <img
                  // @ts-ignore
                  src={
                    (level === 'Master' && MasterBadge) ||
                    (level === 'Senior' && SeniorBadge) ||
                    (level === 'Junior' && JuniorBadge) ||
                    MasterBadge
                  }
                />
              </div>
            </div>
            <div className="w-2/3">
              <p className="text-2xl font-bold mb-5">히트맵</p>
              <div
                className="w-full h-[calc(100%-52px)] bg-red-700 rounded-3xl"
                style={{
                  background:
                    'linear-gradient(180deg, #FF0000 0%, #FFC700 65.62%, #0094FF 99.99%, rgba(255, 255, 255, 0) 100%)',
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col w-full h-[calc(40%-20px)] 2xl:mt-10 lg:mt-6 space-y-4">
            <p className="text-2xl font-bold">훈련 기록</p>
            <div className="flex flex-row w-full h-[37%] bg-white rounded-[22px]">
              <div className="bg-[#FBFBFF] rounded-l-[22px] items-center flex text-center justify-center py-7 w-1/4">
                <p className="text-xl font-bold">도막 두께</p>
              </div>
              <div className="flex  justify-between w-full">
                <div className="content-start flex 2xl:space-x-28 lg:space-x-10 pl-12">
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">평균</p>
                    <p className="inline-block text-3xl font-normal">130</p>
                  </div>
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">평균</p>
                    <p className="inline-block text-3xl font-normal">130</p>
                  </div>
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">평균</p>
                    <p className="inline-block text-3xl font-normal">130</p>
                  </div>
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">평균</p>
                    <p className="inline-block text-3xl font-normal">130</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center text-center px-8 border-l-2 self-stretch 2xl:w-[23%] lg:w-1/3">
                  <p className="inline-block text-sm">평균 두께 / 적정 두께</p>
                  <p className="inline-block text-3xl font-normal">130/160</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full h-[37%] bg-white rounded-[22px]">
              <div className="bg-[#FBFBFF] rounded-l-[22px] items-center flex text-center justify-center py-7 w-1/4">
                <p className="text-xl font-bold">훈련 기록 요약</p>
              </div>
              <div className="flex  justify-between w-full">
                <div className="content-start flex 2xl:space-x-28 lg:space-x-12 pl-12">
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">저도막률</p>
                    <p className="inline-block text-3xl font-normal">7.5%</p>
                  </div>
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">페인트 사용량</p>
                    <p className="inline-block text-3xl font-normal">13.5L</p>
                  </div>
                  <div className="flex flex-col justify-center self-center text-center">
                    <p className="inline-block">소요시간</p>
                    <p className="inline-block text-3xl font-normal">01:29</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center text-center px-8 border-l-2 self-stretch 2xl:w-[23%] lg:w-1/3">
                  <button
                    className="bg-[#015EFF] border-[#015EFF] rounded-xl py-4 px-5 text-white"
                    onClick={() => {
                      navigate('/user/results/graph');
                    }}
                  >
                    그래프 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full rounded-[19px] bg-white text-left 2xl:p-14 lg:p-6 2xl:ml-12 lg:ml-6 2xl:space-y-6 lg:space-y-1">
          <div className="h-2/5">
            <p className="text-2xl font-bold mb-5">작업 궤적 영상</p>
            <button className="w-full drop-shadow-[2px_18px_86px_rgba(0,0,0,0.06)] bg-white rounded-[17px] h-[calc(100%-80px)] flex items-center justify-center">
              <img
                className="2xl:w-16 2xl:h-16 lg:w-10 lg:h-10 drop-shadow-[0px_11px_42px_#BACDF2]"
                src={PlayIcon}
              />
            </button>
          </div>
          <div className="h-2/5">
            <p className="text-2xl font-bold mb-5">훈련 조건 선택</p>
            <div className="flex flex-row place-content-between h-[calc(100%-70px)]">
              <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px] 2xl:py-8 lg:py-3 text-center items-center flex flex-col">
                <img src={LeftIcon1} />
                <p className="text-2xl mt-3 mb-1">부재</p>
                <p className="text-3xl font-bold text-[#005DFE]">둥근</p>
              </div>
              <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px] 2xl:py-8 lg:py-3 text-center items-center flex flex-col">
                <img src={LeftIcon2} />
                <p className="text-2xl mt-3 mb-1">도료</p>
                <p className="text-3xl font-bold text-[#005DFE]">72%</p>
              </div>
              <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px] 2xl:py-8 lg:py-3 text-center items-center flex flex-col">
                <img src={LeftIcon3} />
                <p className="text-2xl mt-3 mb-1">팁사이즈</p>
                <p className="text-3xl font-bold text-[#005DFE]">521</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-2xl font-bold mb-5">작업방식</p>
            <div className="flex flex-row place-content-between">
              <div className="w-[31%]">
                <p>평균 거리</p>
                <p className="font-bold text-3xl">80cm</p>
              </div>
              <div className="w-[31%]">
                <p>평균 각도</p>
                <p className="font-bold text-3xl">98º</p>
              </div>
              <div className="w-[31%]">
                <p>평균 속도</p>
                <p className="font-bold text-3xl">150cm/s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminContainer>
  );
};

export default DetailView;
