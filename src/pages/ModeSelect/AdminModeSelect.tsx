import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import IconPlayer from '../../assets/icon_player.png';
import IconResult from '../../assets/icon_result.png';
import { Footer, NavBar } from '../../components';
import { jwtTokenState, loginState, usernameState } from '../../states/atoms';
import { removeCookieToken, removeRole } from '../../util/tokenManager';

const AdminModeSelect = () => {
  const name = useRecoilValue(usernameState);
  const navigate = useNavigate();

  const [token, setToken] = useRecoilState(jwtTokenState);
  const setRole = useSetRecoilState(loginState);
  const setUsername = useSetRecoilState(usernameState);

  const onLogoutClick = () => {
    removeCookieToken();
    removeRole();
    setToken('');
    setRole('unknown');
    setUsername('unknown');
    navigate('/');
  };

  return (
    token !== '' && (
      <>
        <NavBar
          linktext="로그아웃"
          onClick={() => {
            onLogoutClick();
          }}
        />
        <div className="max-w-2xl  flex flex-col justify-center items-center">
          <h1 className="text-5xl text-center font-extrabold mb-8 text-primary-blue leading-[58.09px]">
            관리자 모드
          </h1>
          <p className="text-[32px] text-center mt-[46px] mb-[74px] font-normal leading-[38.73px] w-max">
            안녕하세요, {name}님!
            <br />
            관리자 모드에 오신 것을 환영합니다.
            <br />
            원하시는 메뉴를 선택하세요.
          </p>
          <div className="flex flex-row mt-10 w-[644px]">
            <Link
              to="/admin/results"
              className="bg-primary-blue py-12 px-14 rounded-[14px] w-[300px] mr-[44px] text-center flex flex-col justify-center items-center"
            >
              <img src={IconResult} className="w-[178px] h-[178px]" />
              <p className="text-[32px] text-center  text-white font-medium w-max">
                전체 기록 조회
              </p>
            </Link>
            <Link
              to="/admin/players"
              className="bg-primary-blue py-12 px-14 rounded-[14px] w-[300px] text-center flex flex-col justify-center items-center"
            >
              <img src={IconPlayer} className="w-[178px] h-[178px]" />
              <p className="text-[32px] text-center  text-white font-medium w-max">
                플레이어 관리
              </p>
            </Link>
          </div>
        </div>
        <Footer absolute />
      </>
    )
  );
};

export default AdminModeSelect;
