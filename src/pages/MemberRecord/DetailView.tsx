import { AdminContainer } from '../../components';

const DetailView = () => {
  return (
    <AdminContainer
      title="훈련 상세 기록"
      detail="해당 훈련에 대한 상세한 기록을 볼 수 있습니다."
    >
      <div className="w-full h-full flex flex-row">
        <div className="w-2/3 h-full text-left">
          <div className="w-full flex flex-row h-3/5 space-x-8">
            <div className="w-1/3">
              <p className="text-2xl font-bold mb-5">도장레벨</p>
              <div className="w-full h-[calc(100%-52px)] bg-[#00338A] rounded-3xl">
                뱃지위치
              </div>
            </div>
            <div className="w-2/3">
              <p className="text-2xl font-bold mb-5">히트맵</p>
              <div className="w-full h-[calc(100%-52px)] bg-red-700 rounded-3xl">
                히트맵 위치
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-[calc(40%-40px)] mt-10 space-y-9">
            <p className="text-2xl font-bold">훈련 기록</p>
            <div className="flex flex-row w-full h-[37%] bg-white rounded-[22px]">
              <div className="bg-[#FBFBFF] rounded-l-[22px] w-[263px] items-center flex text-center justify-center">
                <p className="text-xl font-bold">도막 두깨</p>
              </div>
              <div className="flex content-start justify-center pl-12 space-x-28">
                <div className="flex flex-col justify-center self-center text-center">
                  <p className="inline-block">평균</p>
                  <p className="inline-block text-3xl font-normal">130</p>
                </div>
                <div className="flex flex-col justify-center self-center text-center">
                  <p className="inline-block">평균</p>
                  <p className="inline-block text-3xl font-normal">130</p>
                </div>
                <div className="flex flex-col justify-center self-center text-center">
                  <p className="inline-block">평균</p>
                  <p className="inline-block text-3xl font-normal">130</p>
                </div>
                <div className="flex flex-col justify-center self-center text-center">
                  <p className="inline-block">평균</p>
                  <p className="inline-block text-3xl font-normal">130</p>
                </div>
                <hr className="w-[3px] h-full bg-[#EFEFEF] flex"></hr>
              </div>
            </div>
            <div className="flex flex-row w-full h-[37%] bg-white rounded-[22px] mt-5">
              도막 두꺠 등
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full rounded-[19px] bg-white text-left p-14 ml-12 space-y-6">
          <div className="h-2/5">
            <p className="text-2xl font-bold mb-5">작업 궤적 영상</p>
            <div className="w-full drop-shadow-[2px_18px_86px_rgba(0,0,0,0.06)] bg-white rounded-[17px] h-[calc(100%-80px)]">
              영상
            </div>
          </div>
          <div className="h-2/5">
            <p className="text-2xl font-bold mb-5">훈련 조건 선택</p>
            <div className="flex flex-row place-content-between h-[calc(100%-70px)]">
              <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px]">
                <p>아이콘 부재 둥근</p>
              </div>
              <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px]">
                <p>아이콘 부재 둥근</p>
              </div>
              <div className="w-[31%] bg-[#F3F5F9] h-full rounded-[20px]">
                <p>아이콘 부재 둥근</p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-2xl font-bold mb-5">작업방식</p>
            <div className="flex flex-row place-content-between">
              <div className="w-[31%]">
                <div>아이콘 부재 둥근</div>
              </div>
              <div className="w-[31%]">
                <div>아이콘 부재 둥근</div>
              </div>
              <div className="w-[31%]">
                <div>아이콘 부재 둥근</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminContainer>
  );
};

export default DetailView;
