import React, { MouseEventHandler } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

interface Props {
  type?: any;
  onClick?: any;
  className?: string;
  to?: any;
  disabled?: boolean;
  children?: string;
}

const Button: React.FC<Props> = ({
  type,
  onClick,
  className,
  disabled,
  to,
  children,
  ...rest
}) => {
  to && {
    onClick: () => {
      useNavigate()(to);
    },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`bg-primary-blue -rounded-lg w-full text-white text-md leading-6 font-medium py-4 px-4 h-16 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
