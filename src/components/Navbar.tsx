import { MouseEventHandler, RefAttributes } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

interface Props {
  linktext?: string;
  func?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  main?: boolean;
}

const NavBar: React.FC<Props> = ({ linktext, func, to, main }) => {
  const navigate = useNavigate();
  return (
    <div className="flex fixed z-10 top-0 w-full p-8 justify-between">
      {!main ? (
        <>
          <img className="w-[170px]" src={Logo} />
          <button
            className="underline text-xl font-bold"
            onClick={to ? () => navigate(to) : func}
          >
            {linktext ? linktext : ' '}
          </button>
        </>
      ) : (
        <button onClick={to ? () => navigate(to) : func}>
          <img className="w-[170px]" src={Logo} />
        </button>
      )}
    </div>
  );
};

export default NavBar;
