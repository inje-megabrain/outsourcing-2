import React, { MouseEventHandler } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  type?: any;
  onClick?: any;
  className?: string;
  theme?: 'white' | 'blue' | 'black';
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
}

const Button: React.FC<Props> = ({
  type,
  onClick,
  className,
  disabled,
  children,
  theme,
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
        (theme === 'white' && 'bg-white text-primary-blue') ||
        (theme === 'black' && 'bg-black text-white')
      } -rounded-lg w-[438px] text-lg leading-6 font-medium py-4 px-4 h-16 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
