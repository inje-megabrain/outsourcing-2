import React from 'react';
import Footer from './Footer';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MemberContainer: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <>
      <div
        className={`mx-auto max-w-[438px] min-w-[438px] justify-items-start ${className}`}
        {...rest}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MemberContainer;
