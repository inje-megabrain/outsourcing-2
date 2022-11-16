import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { recordAllAPI } from '../../apis/record';
import { AdminContainer } from '../../components';
import Pagination from '../../components/Pagination';
import { jwtTokenState } from '../../states/atoms';

const AllResults = () => {
  const token = useRecoilValue(jwtTokenState);
  const [data, setData] = useState<any>([]);
  const [nowPage, setNowPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    recordAllAPI(nowPage, token, setData);
  }, [nowPage]);

  const seeDetail = (value: object) => {};
  return (
    <>
      <AdminContainer
        title="전체 기록 조회"
        detail="현재까지 진행된 훈련생들의 기록을 모아볼 수 있습니다."
        backlink={navigate}
      >
        <>
          {data.length > 0 && (
            <>
              <table className="w-full h-full rounded-t-3xl border-spacing-0 border-separate border-[#D2D2D2] border-[1px] text-xl font-medium leading-[24.2px]">
                <tr className="bg-[#015EFF] rounded-t-3xl h-[64px] text-white">
                  <td className="h-[64px] rounded-tl-3xl">날짜</td>
                  <td>기업명</td>
                  <td>이름</td>
                  <td>평균두께</td>
                  <td>페인트 사용량</td>
                  <td>소요시간</td>
                  <td>점수</td>
                  <td className="h-[64px] rounded-tr-3xl">상세정보</td>
                </tr>
                {data.map((value: any) => (
                  <tr
                    key={value.id}
                    className="h-[120px] bg-white border-spacing-0 border-separate outline-1 outline-[#D2D2D2] outline align-middle"
                  >
                    <td>
                      {value.dayId}
                      <br />
                      {value.timeId}
                    </td>
                    <td>{value.corp}</td>
                    <td>{value.name}</td>
                    <td>{value.thickness}㎛</td>
                    <td>{value.usagePaint}</td>
                    <td>{value.timeId}</td>
                    <td>{value.score}</td>
                    <td>
                      <button
                        className="w-[144px] h-[66px] bg-[#015EFF] rounded-2xl text-white text-xl leading-[24.2px]"
                        onClick={() => {
                          seeDetail(value);
                        }}
                      >
                        보기
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              <Pagination
                size={6}
                now={nowPage}
                onClick={setNowPage}
                className="mt-[72px]"
              />
            </>
          )}
        </>
      </AdminContainer>
    </>
  );
};

export default AllResults;
