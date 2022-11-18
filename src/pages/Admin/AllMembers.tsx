import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { memberAllAPI } from '../../apis/member';
import { recordAllAPI } from '../../apis/record';
import { AdminContainer } from '../../components';
import Pagination from '../../components/Pagination';
import { jwtTokenState } from '../../states/atoms';
import TrashIcon from '../../assets/icon_trash.png';
import { mapHash } from '@fullcalendar/react';

const AllMembers = () => {
  const token = useRecoilValue(jwtTokenState);
  const [data, setData] = useState<any>([]);
  const [checkedItems, setCheckedItems] = useState<any>();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [nowPage, setNowPage] = useState(0);
  const navigate = useNavigate();
  const sizePage = 4;
  useEffect(() => {
    isAllChecked
      ? data.memberResponseDtos.map((value: any) =>
          setCheckedItems((prev: any) => {
            return { ...prev, [value.username]: isAllChecked };
          }),
        )
      : setCheckedItems({});
  }, [isAllChecked]);

  useEffect(() => {
    memberAllAPI(nowPage, sizePage, token, setData);
  }, [nowPage]);

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  const checkItemHandler = (username: string, isChecked: boolean) => {
    setCheckedItems((prev: any) => {
      return { ...prev, [username]: isChecked };
    });
  };

  return (
    <>
      <AdminContainer
        title="플레이어 관리"
        detail="특정 아이디를 찾거나, 일괄적으로 아이디를 선택하여 삭제할 수 있습니다."
        backlink={navigate}
      >
        <>
          {data.memberResponseDtos && data.memberResponseDtos.length > 0 && (
            <div className="flex flex-col">
              <div className="flex flex-row items-end self-end">
                <button className="bg-black h-16 w-16 rounded-lg flex justify-center items-center mb-10">
                  <img src={TrashIcon} />
                </button>
              </div>
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
                  {data.memberResponseDtos.map((value: any, index: number) => (
                    <tr
                      className="h-[120px] bg-white border-spacing-0 border-separate outline-x-1 outline-[#D2D2D2] outline align-middle"
                      key={value.username}
                    >
                      <td>
                        <input
                          type="checkbox"
                          className="ml-6 w-6 h-6 rounded-[7px] border-[#BCBCBC] border appearance-none cursor-pointer checked:bg-slate-400"
                          checked={checkedItems && checkedItems[value.username]}
                          onChange={(e) =>
                            checkItemHandler(value.username, e.target.checked)
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
                  ))}
                </table>
              </div>
              <Pagination
                size={data.pageLimit}
                now={nowPage}
                onClick={setNowPage}
                className="mt-[72px]"
              />
            </div>
          )}
        </>
      </AdminContainer>
    </>
  );
};

export default AllMembers;
