import { useNavigate } from 'react-router-dom';
import { Button, Footer, NavBar } from '../../components';

const Main = () => {
  const navigate = useNavigate();

  const onStartButtonClick = () => {
    navigate('/login');
  };

  return (
    <>
      <NavBar />
      <Footer absolute theme="white" />
      <div className="grid w-full h-full text-center items-center bg-gradient-to-t to-[#0759FF] from-[#1F1F1F] text-white text-[80px] content-center">
        <div>
          <h1 className="font-extrabold drop-shadow-[0_4px_45px_rgba(0,0,0,0.5)]">
            Ships Painting
          </h1>
          <h3 className="text-white text-2xl mt-6 font-normal">
            본 프로그램은 선박 도장 훈련을 목적으로 설계된 VR 시뮬레이터입니다.
          </h3>
          <Button
            bold
            className="mt-24"
            theme="white"
            onClick={onStartButtonClick}
          >
            시작하기
          </Button>
        </div>
      </div>
    </>
  );
};
export default Main;
