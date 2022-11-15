import React, { MouseEventHandler } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  type?: any;
  onClick?: any;
  className?: string;
  theme?: 'white' | 'blue' | 'black';
  disabled?: boolean;
  bold?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
}

const Button: React.FC<Props> = ({
  type,
  onClick,
  className,
  disabled,
  children,
  theme,
  bold,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${
        ((theme === 'blue' || theme === undefined) &&
          'bg-primary-blue text-white') ||
        (theme === 'white' && 'bg-white text-[#0154E5]') ||
        (theme === 'black' && 'bg-black text-white')
      } -rounded-lg w-[438px] text-xl leading-6 ${
        bold ? 'font-bold' : 'font-normal'
      } py-4 px-4 h-16 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
