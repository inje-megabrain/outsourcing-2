import React, { MouseEventHandler } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

interface Props {
  onClick?: any;
  className?: string;
  to?: any;
  children?: string;
}

const Button: React.FC<Props> = ({ onClick, className, to, children }) => {
  return (
    <Link to={to} onClick={onClick}>
      <button
        className={`bg-primary-blue mt-1 -rounded-lg w-full text-white text-sm leading-6 font-medium py-4 px-4 h-15 rounded-lg ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
