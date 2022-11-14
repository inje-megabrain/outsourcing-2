import React from 'react';
import Footer from './Footer';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MemberContainer: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <div className="w-full h-full items-center p-16">
      <div
        className={`flex flex-col items-center justify-center h-full mx-auto max-w-[438px] min-w-[438px] justify-items-start ${className}`}
        {...rest}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MemberContainer;
