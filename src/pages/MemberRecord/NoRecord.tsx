import NoData from '../../assets/icon_nodata.svg';
const NoRecord = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[376px] h-[376px] rounded-full bg-[#FBFBFF] flex justify-center items-center">
        <img
          src={NoData}
          className="w-[152px] h-[189px] drop-shadow-[8px_18px_27px_rgba(254,93,47,0.25)]"
        />
      </div>
      <p className="mt-[75px] font-bold text-[32px]">기록 없음</p>
      <p className="font-medium text-2xl text-[#636363] mt-4">
        이 날짜에 조회되는 기록이 없습니다
      </p>
    </div>
  );
};

export default NoRecord;
