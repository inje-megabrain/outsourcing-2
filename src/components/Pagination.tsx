import { Dispatch, SetStateAction } from 'react';

interface Props {
  size: number;
  now: number;
  className?: string;
  onClick?: Dispatch<SetStateAction<number>>;
}
//3
const Pagination: React.FC<Props> = ({ size, now, className, onClick }) => {
  return (
    <div className={`flex flex-row justify-center ${className}`}>
      {Array.from(Array(size), (x, k) => (
        <button
          key={k}
          className={`${
            k === now - 1 ? 'bg-[#E9E9E9] text-[#015EFF]' : ''
          } w-16 h-16 rounded-[11px] flex items-center justify-center hover:bg-slate-200`}
          onClick={() => {
            onClick && onClick(k + 1);
          }}
        >
          {k + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
