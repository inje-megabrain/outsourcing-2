import React, { useState } from 'react';
import { AdminContainer } from '../../components';
import startBtn from '../../assets/icon_viewdetail.png';
import Badge from '../../assets/senior_badge.png';
import Pagination from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';

const DayView = () => {
  const [pageNum, setPageNum] = useState(1);
  const template1 = {
    time: '02:14pm',
    train: {
      score: 25,
      dd: '-%',
      ss: '-um',
      paint: '-L',
    },
  };
  const data = [template1, template1, template1];
  const navigate = useNavigate();

  const onDetailButtonClick = (id: number) => {
    navigate('/user/results/detail');
  };

  return (
    <AdminContainer
      title="개인 기록 조회"
      detail="선택한 날짜에 훈련한 기록을 모아볼 수 있습니다."
      className="flex items-center"
    >
      <div className="">
        <p className="text-3xl font-bold text-left mb-10">기록 리스트</p>
        <ul>
          {data.map((data) => (
            <li>
              <div className="flex felx-row w-[1645px] h-[160px] bg-white rounded-3xl mb-7">
                <div className="flex felx-row bg-[#FBFBFF] rounded-l-3xl h-[160px] w-[329px] p-[40px] items-center">
                  <button onClick={() => onDetailButtonClick(123)}>
                    <img
                      className="inline h-16 w-16 drop-shadow-[0_11px_42px_rgba(186,205,242,1)]"
                      src={startBtn}
                    />
                  </button>
                  <p className="font-medium inline-block text-left ml-9 text-xl">
                    <b>훈련 시작 시간</b>
                    <br />
                    <br />
                    <p className="font-normal inline-block">{data.time}</p>
                  </p>
                </div>
                <div className="flex felx-row h-[160px] w-[1316px] place-content-between">
                  <div className="text-left flex flex-col p-[40px]">
                    <p className="font-medium inline-block text-xl">
                      <b>훈련 기록 요약</b>
                    </p>
                    <br />
                    <p className="inline-block text-[#101010] font-normal text-xl">
                      도장 점수 : {data.train.score}{' '}
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 저도막률 :{' '}
                      {data.train.dd} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 평균
                      도막 두께 : {data.train.ss}{' '}
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 페인트 사용량 :{' '}
                      {data.train.paint}
                    </p>
                  </div>
                  <div className="flex flex-col bg-[#005DFE] w-[249px] h-[116px] rounded-2xl m-[22px] items-center p-2">
                    <img className="h-[70px] w-[72px]" src={Badge} />
                    <p className="text-xl text-white">Master Level</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Pagination size={9} now={pageNum} onClick={setPageNum} />
      </div>
    </AdminContainer>
  );
};

export default DayView;
