import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MemberContainer: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`mx-auto max-w-[40%] min-w-[40%] justify-items-start ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MemberContainer;
