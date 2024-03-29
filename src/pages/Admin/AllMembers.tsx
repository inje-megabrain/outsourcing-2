import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  deleteMemberAPI,
  memberAllAPI,
  searchMemberAPI,
} from '../../apis/member';
import SearchIcon from '../../assets/icon_search.png';
import TrashIcon from '../../assets/icon_trash.png';
import { AdminContainer, Loading } from '../../components';
import Pagination from '../../components/Pagination';
import { jwtTokenState } from '../../states/atoms';

const AllMembers = () => {
  const token = useRecoilValue(jwtTokenState);
  const [data, setData] = useState<any>([]);
  const [checkedItems, setCheckedItems] = useState<any>();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [nowPage, setNowPage] = useState(0);
  const pageSize = 4;

  const refreshWebsite = () => {
    setRefresh((prev: boolean) => !prev);
  };

  const callAPI = async () => {
    if (search === '') {
      await memberAllAPI(nowPage, pageSize, token, setData);
    } else {
      await searchMemberAPI(token, setData, nowPage, pageSize, search);
    }
  };
  useEffect(() => {
    token !== '' && callAPI();
    setIsAllChecked(false);
  }, [nowPage, token, search, refresh]);

  useEffect(() => {
    isAllChecked
      ? data.memberResponseDtos.map((value: any) =>
          setCheckedItems((prev: any) => {
            return { ...prev, [value.username]: isAllChecked };
          }),
        )
      : setCheckedItems({});
  }, [isAllChecked]);

  const checkItemHandler = (username: string, isChecked: boolean) => {
    setCheckedItems((prev: any) => {
      return { ...prev, [username]: isChecked };
    });
  };

  const handleDeleteMember = () => {
    const deleteItems: string[] = [];
    const deleteNames: string[] = [];

    Object.keys(checkedItems).map((value) => {
      if (checkedItems[value] === true) {
        deleteItems.push(value);
        data.memberResponseDtos.map((item: any) => {
          if (value == item.username) deleteNames.push(item.name);
        });
      }
    });

    if (window.confirm(deleteNames.join(', ') + ' 멤버를 삭제하시겠습니까?')) {
      deleteItems.map((value) => {
        deleteMemberAPI(token, value, refreshWebsite);
      });
    } else {
      console.log('취소되었습니다.');
    }
  };

  return token !== '' ? (
    <>
      <AdminContainer
        title={search === '' ? '플레이어 관리' : `플레이어 검색 - ${search}`}
        detail="특정 아이디를 찾거나, 일괄적으로 아이디를 선택하여 삭제할 수 있습니다."
        backlink
        // @ts-ignore
        setSearch={search !== '' && setSearch}
      >
        <>
          <div className="flex flex-row items-end self-center justify-end mt-[43px] mb-[40px]">
            <button
              className="bg-black h-16 w-16 rounded-lg flex justify-center items-center mr-[11px]"
              onClick={handleDeleteMember}
            >
              <img src={TrashIcon} />
            </button>
            <div className="bg-white border-[1px] border-[#D2D2D2] h-16 w-[480px] rounded-lg flex justify-start items-center">
              <img className="w-[28px] h-[28px] ml-4" src={SearchIcon} />
              <input
                className="w-full ml-2 h-full p-3 text-[28px] font-medium"
                placeholder="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onFocus={() => setNowPage(0)}
              />
            </div>
          </div>
          {data.memberResponseDtos &&
            (data.memberResponseDtos.length > 0 ? (
              <div className="flex flex-col">
                <div className="h-[546px]">
                  <table className="w-full rounded-t-3xl border-spacing-0 border-separate border-[#D2D2D2] border-[1px] text-xl font-medium leading-[24.2px]">
                    <tr className="bg-[#002D7A] rounded-t-3xl h-[64px] w-[5%] text-white ">
                      <td className="h-[64px] rounded-tl-3xl">
                        <input
                          type="checkbox"
                          className="ml-6 w-6 h-6 rounded-[7px] border-[#BCBCBC] border appearance-none cursor-pointer checked:bg-slate-400"
                          checked={isAllChecked}
                          onChange={(e) => setIsAllChecked((prev) => !prev)}
                        />
                      </td>
                      <td className="w-[19%]">가입일자</td>
                      <td className="w-[19%]">회사명</td>
                      <td className="w-[19%]">이름</td>
                      <td className="w-[19%]">아이디</td>
                      <td className="h-[64px] rounded-tr-3xl w-[19%]">
                        생년월일
                      </td>
                    </tr>
                    {data.memberResponseDtos.map(
                      (value: any, index: number) => (
                        <tr
                          className="h-[120px] bg-white border-spacing-0 border-separate outline-1 outline-[#D2D2D2] outline align-middle "
                          key={value.username}
                        >
                          <td>
                            <input
                              type="checkbox"
                              className="ml-6 w-6 h-6 rounded-[7px] border-[#BCBCBC] border appearance-none cursor-pointer checked:bg-slate-400"
                              checked={
                                checkedItems && checkedItems[value.username]
                              }
                              onChange={(e) =>
                                checkItemHandler(
                                  value.username,
                                  e.target.checked,
                                )
                              }
                            />
                          </td>
                          <td>{value.createdTime}</td>
                          <td>{value.companyName}</td>
                          <td>{value.name}</td>
                          <td>{value.username}</td>
                          <td>
                            {value.birthDay &&
                              value.birthDay.substring(0, 2) +
                                ' . ' +
                                value.birthDay.substring(2, 4) +
                                ' . ' +
                                value.birthDay.substring(4, 6)}
                          </td>
                        </tr>
                      ),
                    )}
                  </table>
                </div>
                <Pagination
                  size={data.pageLimit}
                  now={nowPage}
                  onClick={setNowPage}
                  className="mt-[60px]"
                />
              </div>
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

export default AllMembers;
