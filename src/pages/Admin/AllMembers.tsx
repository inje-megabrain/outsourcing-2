import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { memberAllAPI } from '../../apis/member';
import { recordAllAPI } from '../../apis/record';
import { AdminContainer } from '../../components';
import Pagination from '../../components/Pagination';
import { jwtTokenState } from '../../states/atoms';

const AllMembers = () => {
  const token = useRecoilValue(jwtTokenState);
  const [data, setData] = useState<any>([]);
  const [nowPage, setNowPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    memberAllAPI(token, setData);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const seeDetail = (value: object) => {};

  return (
    <>
      <AdminContainer
        title="플레이어 관리"
        detail="특정 아이디를 찾거나, 일괄적으로 아이디를 선택하여 삭제할 수 있습니다."
        backlink={navigate}
      >
        <>
          {data.length > 0 && (
            <>
              <table className="w-full h-full rounded-t-3xl border-spacing-0 border-separate border-[#D2D2D2] border-[1px] text-xl font-medium leading-[24.2px]">
                <tr className="bg-[#002D7A] rounded-t-3xl h-[64px] text-white ">
                  <td className="h-[64px] rounded-tl-3xl">
                    <input
                      type="checkbox"
                      className="ml-6 w-6 h-6 rounded-[7px] border-[#BCBCBC] border appearance-none cursor-pointer checked:bg-slate-400"
                    />
                  </td>
                  <td>가입일자</td>
                  <td>회사명</td>
                  <td>이름</td>
                  <td>아이디</td>
                  <td className="h-[64px] rounded-tr-3xl">생년월일</td>
                </tr>
                {data.map((value: any) => (
                  <tr className="h-[120px] bg-white border-spacing-0 border-separate outline-x-1 outline-[#D2D2D2] outline align-middle">
                    <td>
                      <input
                        type="checkbox"
                        className="ml-6 w-6 h-6 rounded-[7px] border-[#BCBCBC] border appearance-none cursor-pointer checked:bg-slate-400"
                      />
                    </td>
                    <td>{value.createdTime}</td>
                    <td>{value.companyName}</td>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>
                      {value.birthDay.substring(0, 2) +
                        ' . ' +
                        value.birthDay.substring(2, 4) +
                        ' . ' +
                        value.birthDay.substring(4, 6)}
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

export default AllMembers;
