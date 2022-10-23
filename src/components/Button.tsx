import React, { MouseEventHandler } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  type?: any;
  onClick?: any;
  className?: string;
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
}

const Button: React.FC<Props> = ({
  type,
  onClick,
  className,
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-primary-blue -rounded-lg w-[438px] text-white text-lg leading-6 font-medium py-4 px-4 h-16 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
