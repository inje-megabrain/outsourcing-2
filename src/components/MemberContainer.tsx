import React from 'react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MemberContainer: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`mx-auto max- min- justify-items-start ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MemberContainer;
