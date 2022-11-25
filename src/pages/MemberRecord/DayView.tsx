import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { recordByMonthDayAPI } from '../../apis/record';
import JuniorBadge from '../../assets/junior_badge.svg';
import MasterBadge from '../../assets/master_badge.svg';
import SeniorBadge from '../../assets/senior_badge.svg';
import { AdminContainer, Loading } from '../../components';
import Pagination from '../../components/Pagination';
import { jwtTokenState, usernameState } from '../../states/atoms';
import NoRecord from './NoRecord';

const DayView = () => {
  const { date } = useParams();
  const [pageNum, setPageNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  const username = useRecoilValue(usernameState);
  const token = useRecoilValue(jwtTokenState);

  const callAPI = async () => {
    if (date && token !== '') {
      await recordByMonthDayAPI(date, username, token, setData, pageNum, 3);
      await setLoading(false);
    }
  };

  useEffect(() => {
    callAPI();
  }, [date, pageNum, token]);

  const onDetailButtonClick = (data: any) => {
    navigate('/user/results/detail/' + data.id, { state: false });
  };

  return token !== '' ? (
    <AdminContainer
      title={`개인 기록 조회 - ${new Date(String(date)).toLocaleDateString(
        'ko-kr',
      )}`}
      detail="선택한 날짜에 훈련한 기록을 모아볼 수 있습니다."
      className="flex items-center"
      homelink="/mode"
      backlink
    >
      <div className="w-full">
        {!loading &&
          (data.userRecordDtos.length > 0 ? (
            <>
              <p className="text-3xl font-bold text-left mb-10 w-full">
                기록 리스트
              </p>
              <ul className="h-[536px] mb-6">
                {data.userRecordDtos.map((item: any) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onDetailButtonClick(item)}
                      className="border-4 border-transparent hover:border-4 hover:border-[#015DFE] rounded-3xl mb-7  w-full"
                    >
                      <div className="flex felx-row h-[160px] m-0">
                        <div className="flex felx-row bg-[#FBFBFF] rounded-l-3xl h-full 2xl:w-[20%] lg:w-[25%] p-[40px] items-center">
                          <p className="font-medium inline-block text-left ml-8 text-xl">
                            <p className="w-max">훈련 시작 시간</p>
                            <br />
                            <p className="font-normal inline-block">
                              {item.timeId}
                            </p>
                          </p>
                        </div>
                        <div className="flex felx-row h-[160px] w-[80%] place-content-between bg-white rounded-r-3xl">
                          <div className="text-left flex flex-col p-[40px]">
                            <p className="font-medium inline-block text-xl">
                              <b>훈련 기록 요약</b>
                            </p>
                            <br />
                            <p className="inline-block text-[#101010] font-normal text-xl">
                              도장 점수 : {item.score}{' '}
                              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 저도막률 :{' '}
                              {item.proficiency}{' '}
                              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 평균 도막
                              두께 : {item.thicknessAvg}{' '}
                              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 페인트
                              사용량 : {item.useagePaint}
                            </p>
                          </div>
                          <div className="flex flex-col bg-[#005DFE] w-1/5 h-[116px] rounded-2xl m-[22px] items-center p-2">
                            <img
                              className="h-[70px] w-[72px]"
                              //@ts-ignore
                              src={
                                (Number(item.score) <= 30 && JuniorBadge) ||
                                (Number(item.score) <= 80 && SeniorBadge) ||
                                (Number(item.score) <= 100 && MasterBadge)
                              }
                            />
                            <p className="text-xl text-white">
                              {(Number(item.score) <= 30 && 'Junior Level') ||
                                (Number(item.score) <= 80 && 'Senior Level') ||
                                (Number(item.score) <= 100 && 'Master Level')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <Pagination
                size={data.pageLimit}
                now={pageNum}
                onClick={setPageNum}
                className="mt-12"
              />
            </>
          ) : (
            <NoRecord />
          ))}
      </div>
    </AdminContainer>
  ) : (
    <Loading />
  );
};

export default DayView;
