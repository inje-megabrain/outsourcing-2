import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const MemberContainer: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto max-w-md justify-items-start">{children}</div>;
};

export default MemberContainer;
