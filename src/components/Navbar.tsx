import { MouseEventHandler, RefAttributes } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

interface Props {
  linktext?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
}

const NavBar: React.FC<Props> = ({ linktext, onClick, to }) => {
  const navigate = useNavigate();
  return (
    <div className="flex fixed z-10 top-0 w-full p-8 justify-between">
      <Link to="/">
        <img className="w-[170px]" src={Logo} />
      </Link>
      {(onClick || to) && (
        <button
          className="underline text-xl font-bold"
          onClick={to ? () => navigate(to) : onClick}
        >
          {linktext ? linktext : 'HOME'}
        </button>
      )}
    </div>
  );
};

export default NavBar;
