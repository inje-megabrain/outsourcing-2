import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { recordAllAPI, searchRecord } from '../../apis/record';
import { AdminContainer, Loading } from '../../components';
import Pagination from '../../components/Pagination';
import { jwtTokenState } from '../../states/atoms';
import SortIcon from '../../assets/icon_sort.svg';
import SearchIcon from '../../assets/icon_search.png';

type sortType = {
  sortTag: string;
  direction: 'DESC' | 'ASC';
};
const AllResults = () => {
  const token = useRecoilValue(jwtTokenState);
  const [data, setData] = useState<any>([]);
  const [sort, setSort] = useState<sortType>({
    sortTag: 'dayId',
    direction: 'DESC',
  });
  const [nowPage, setNowPage] = useState(0);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const pageSize = 4;

  const callAPI = async () => {
    if (search === '') {
      await recordAllAPI(
        sort.direction,
        nowPage,
        pageSize,
        sort.sortTag,
        token,
        setData,
      );
    } else {
      await searchRecord(
        token,
        setData,
        sort.direction,
        nowPage,
        pageSize,
        sort.sortTag,
        search,
      );
    }
  };
  useEffect(() => {
    token !== '' && callAPI();
  }, [nowPage, sort, token, search]);

  useEffect(() => {
    setNowPage(0);
  }, [sort]);

  const seeDetail = (recordId: number) => {
    navigate(`/user/results/detail/${recordId}`, { state: true });
  };
  const onClickSort = (sortTag: string) => {
    setSort((prev: sortType) => {
      return {
        sortTag,
        direction:
          prev.sortTag === sortTag
            ? prev.direction === 'ASC'
              ? 'DESC'
              : 'ASC'
            : 'ASC',
      };
    });
  };

  return token !== '' ? (
    <>
      <AdminContainer
        title={search === '' ? '전체 기록 조회' : `검색 기록 조회 - ${search}`}
        detail="현재까지 진행된 훈련생들의 기록을 모아볼 수 있습니다."
        backlink
      >
        <>
          <div className="flex flex-row items-end self-center justify-end mt-[43px] mb-[40px]">
            <div className="bg-white border-[1px] border-[#D2D2D2] h-16 w-[480px] rounded-lg flex justify-start items-center">
              <img className="w-[28px] h-[28px] ml-4" src={SearchIcon} />
              <input
                className="w-full ml-2 h-full p-3 text-[28px] font-medium"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          {data.adminUserRecordDtos &&
            (data.adminUserRecordDtos.length > 0 ? (
              <>
                <div className="h-[546px]">
                  <table className="w-full rounded-t-3xl border-spacing-0 border-separate border-[#D2D2D2] border-[1px] text-xl font-medium leading-[24.2px]">
                    <thead className="bg-[#015EFF] rounded-t-3xl h-[64px] text-white">
                      <td className="h-[64px] rounded-tl-3xl w-[14.2%]">
                        날짜
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'dayId' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('dayId')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="w-[10%]">
                        기업명
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'companyName' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('companyName')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="w-[10%]">
                        이름
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'memberName' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('memberName')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="w-[12%]">
                        평균두께
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'thickness' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('thickness')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="w-[12%]">
                        페인트 사용량
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'usagePaint' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('usagePaint')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="w-[14.2%]">
                        소요시간
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'timeId' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('timeId')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="w-[13%]">
                        점수
                        <button
                          className={`ml-2 ${
                            sort.sortTag === 'score' &&
                            (sort.direction === 'ASC'
                              ? 'rotate-180'
                              : 'rotate-0')
                          }`}
                          onClick={() => onClickSort('score')}
                        >
                          <img src={SortIcon} />
                        </button>
                      </td>
                      <td className="h-[64px] rounded-tr-3xl w-[20%]">
                        상세정보
                      </td>
                    </thead>
                    {data.adminUserRecordDtos.map((value: any) => (
                      <tbody
                        key={value.id}
                        className="h-[120px] bg-white border-spacing-0 border-separate outline-1 outline-[#D2D2D2] outline align-middle"
                      >
                        <td>
                          <p className="mb-1">{value.dayId}</p>
                          <p className="text-[#A7A7A7]">
                            {value.timeId &&
                              value.timeId.substring(0, 2) +
                                ' : ' +
                                value.timeId.substring(3, 5) +
                                ' : ' +
                                value.timeId.substring(6, 8)}
                          </p>
                        </td>
                        <td>{value.companyName}</td>
                        <td>{value.memberName}</td>
                        <td>{value.thickness}㎛</td>
                        <td>{value.usagePaint}L</td>
                        <td>{value.timeId}</td>
                        <td>{value.score}</td>
                        <td>
                          <button
                            className="w-[144px] h-[66px] bg-[#015EFF] rounded-2xl text-white text-xl leading-[24.2px]"
                            onClick={() => {
                              seeDetail(value.id);
                            }}
                          >
                            보기
                          </button>
                        </td>
                      </tbody>
                    ))}
                  </table>
                </div>
                <Pagination
                  size={data.pageLimit}
                  now={nowPage}
                  onClick={setNowPage}
                  className="mt-[60px]"
                />
              </>
            ) : (
              <p className="text-2xl">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                검색 결과가 없습니다.
              </p>
            ))}
        </>
      </AdminContainer>
    </>
  ) : (
    <Loading />
  );
};

export default AllResults;
