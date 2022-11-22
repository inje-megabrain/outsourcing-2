import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AdminContainer } from '../../components';
import MasterBadge from '../../assets/master_badge.svg';
import SeniorBadge from '../../assets/senior_badge.svg';
import JuniorBadge from '../../assets/junior_badge.svg';

import PlayIcon from '../../assets/icon_viewdetail.png';
import PauseIcon from '../../assets/icon_pause.svg';

import LeftIcon1 from '../../assets/lefticon_1.png';
import LeftIcon2 from '../../assets/lefticon_2.png';
import LeftIcon3 from '../../assets/lefticon_3.png';
import {
  recordById,
  recordByIdAdmin,
  recordImgById,
  videoRecord,
} from '../../apis/record';
import { useRecoilValue } from 'recoil';
import {
  jwtTokenState,
  tokenLoadingState,
  usernameState,
} from '../../states/atoms';

const DetailView = () => {
  const { recordid } = useParams();
  const { state } = useLocation();
  const tokenLoading = useRecoilValue(tokenLoadingState);
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  const username = useRecoilValue(usernameState);
  const [isPlaying, setIsPlaying] = useState(false);
  const token = useRecoilValue(jwtTokenState);
  const [img, setImg] = useState<string>();

  const level =
    (data && Number(data.score) <= 30 && 'Junior') ||
    (data && Number(data.score) <= 80 && 'Senior') ||
    (data && Number(data.score) <= 100 && 'Master');

  useEffect(() => {
    if (tokenLoading) {
      if (!state) {
        recordById(token, setData, username, recordid);
      } else {
        recordByIdAdmin(token, setData, recordid);
      }
      recordImgById(username, token, setImg, recordid);
    }

    videoRecord(token, recordid);
  }, [tokenLoading]);

  return (
    data && (
      <AdminContainer
        title="훈련 상세 기록"
        detail="해당 훈련에 대한 상세한 기록을 볼 수 있습니다."
        homelink="/mode"
        backlink
      >
        <div className="w-full h-full flex flex-row">
          <div className="w-2/3 h-full text-left">
            <div className="w-full flex flex-row h-3/5 space-x-8">
              <div className="w-1/3">
                <p className="text-2xl font-bold mb-5">도장레벨</p>
                <div className="w-full h-[calc(100%-52px)] bg-[#00338A] rounded-3xl p-10 flex flex-col justify-between">
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-[56px] font-bold text-white">
                      {data.score}
                    </p>
                    <div className="bg-white lg:px-2 2xl:px-5 py-3 rounded-[6px]">
                      <p className="text-2lg font-bold">{level} Level</p>
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
                    className="m-3"
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
                >
                  {img && (
                    <img
                      className="h-full w-full rounded-3xl"
                      src={`data:image/jpeg;base64,${img}`}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full h-[calc(40%-20px)] 2xl:mt-10 lg:mt-6 space-y-4">
              <p className="text-2xl font-bold">훈련 기록</p>
              <div className="flex flex-row w-full h-[37%] bg-white rounded-[22px]">
                <div className="bg-[#FBFBFF] rounded-l-[22px] items-center flex text-center justify-center py-7 w-1/4">
                  <p className="text-xl font-bold">도막 두께(μm)</p>
                </div>
                <div className="flex  justify-between w-full">
                  <div className="content-start flex 2xl:space-x-24 lg:space-x-10 pl-12">
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">평균</p>
                      <p className="inline-block text-3xl font-normal">
                        {data.thickness.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">최대</p>
                      <p className="inline-block text-3xl font-normal">
                        {data.thicknessMax.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">최소</p>
                      <p className="inline-block text-3xl font-normal">
                        {data.thicknessMin.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">분산</p>
                      <p className="inline-block text-3xl font-normal">
                        {data.thicknessLess.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center text-center px-8 border-l-2 self-stretch 2xl:w-[23%] lg:w-1/3">
                    <p className="inline-block text-sm">
                      평균 두께 / 적정 두께
                    </p>
                    <p className="inline-block text-3xl font-normal">
                      {data.thickness.toFixed(2)}/160
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full h-[37%] bg-white rounded-[22px]">
                <div className="bg-[#FBFBFF] rounded-l-[22px] items-center flex text-center justify-center py-7 w-1/4">
                  <p className="text-xl font-bold">훈련 기록 요약</p>
                </div>
                <div className="flex  justify-between w-full">
                  <div className="content-start flex 2xl:space-x-20 lg:space-x-12 pl-12">
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">저도막률</p>
                      <p className="inline-block text-3xl font-normal">
                        {data.thicknessLess.toFixed(1)}%
                      </p>
                    </div>
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">페인트 사용량</p>
                      <p className="inline-block text-3xl font-normal">
                        {data.usagePaint}L
                      </p>
                    </div>
                    <div className="flex flex-col justify-center self-center text-center">
                      <p className="inline-block">소요시간</p>
                      <p className="inline-block text-3xl font-normal">
                        {String(Math.floor(data.playTime / 60)).padStart(
                          2,
                          '0',
                        ) +
                          ':' +
                          (data.playTime - Math.floor(data.playTime / 60) * 60)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center text-center px-8 border-l-2 self-stretch 2xl:w-[23%] lg:w-1/3">
                    <button
                      className="bg-[#015EFF] border-[#015EFF] rounded-xl py-4 px-5 text-white"
                      onClick={() => {
                        navigate('/user/results/graph', { state: data });
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
              <button
                onClick={() => {
                  setIsPlaying((prevState: boolean) => !prevState);
                }}
                className="w-full drop-shadow-[2px_18px_86px_rgba(0,0,0,0.06)] bg-white rounded-[17px] h-[calc(100%-80px)] flex items-center justify-center"
              >
                <img
                  className="2xl:w-16 2xl:h-16 lg:w-10 lg:h-10 drop-shadow-[0px_11px_42px_#BACDF2]"
                  src={!isPlaying ? PlayIcon : PauseIcon}
                />
              </button>
            </div>
            <div className="h-2/5">
              <p className="text-2xl font-bold mb-5">훈련 조건 선택</p>
              <div className="flex flex-row place-content-between h-[calc(100%-70px)]">
                <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px] 2xl:py-8 lg:py-3 text-center items-center flex flex-col justify-center">
                  <img src={LeftIcon1} />
                  <p className="text-2xl mt-3 mb-1">부재</p>
                  <p className="text-3xl font-bold text-[#005DFE] mb-0">
                    {data.plateType === 'CurveSurface' && '곡면'}
                  </p>
                </div>
                <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px] 2xl:py-8 lg:py-3 text-center items-center flex flex-col justify-center">
                  <img src={LeftIcon2} />
                  <p className="text-2xl mt-3 mb-1">도료</p>
                  <p className="text-3xl font-bold text-[#005DFE]">
                    {data.soildcontent}%
                  </p>
                </div>
                <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px] 2xl:py-8 lg:py-3 text-center items-center flex flex-col justify-center">
                  <img src={LeftIcon3} />
                  <p className="text-2xl mt-3 mb-1">팁사이즈</p>
                  <p className="text-3xl font-bold text-[#005DFE]">
                    {data.tipSize}
                  </p>
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
    )
  );
};

export default DetailView;
