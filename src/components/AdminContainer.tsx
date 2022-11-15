import { Link, NavigateFunction } from 'react-router-dom';
import HomeIcon from '../assets/icon_home.png';
import BackIcon from '../assets/icon_back.svg';
interface Props {
  title: string;
  detail: string;
  homelink?: string;
  backlink?: NavigateFunction;
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const AdminContainer: React.FC<Props> = ({
  title,
  detail,
  homelink,
  backlink,
  children,
  className,
}) => (
  <div className="w-full h-full">
    {backlink && (
      <button
        onClick={() => {
          backlink(-1);
        }}
        className="absolute left-[58px] top-[83px]"
      >
        <img src={BackIcon} />
      </button>
    )}
    <div className="w-full h-[180px] pt-[83px] pb-[24px] px-[143px] bg-white flex justify-between">
      <div>
        <h1 className="text-4xl mb-3 font-semibold">{title}</h1>
        <h3 className="text-[#AAAAAA] text-sm font-medium">{detail}</h3>
      </div>
      {homelink && (
        <Link
          to={homelink}
          className="rounded-[5px] bg-[#222C3D] p-[10px] items-center self-center"
          style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25' }}
        >
          <img src={HomeIcon} />
        </Link>
      )}
    </div>
    <div
      className={`w-full h-[calc(100%-180px)] px-[143px] pb-[52px] pt-[30px] bg-[background: #F5F6F9;
] justify-center text-center ${className}`}
    >
      {children}
    </div>
  </div>
);

export default AdminContainer;
