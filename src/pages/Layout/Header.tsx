import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
      <h6 className="text-right underline p-8 w-full fixed top-0 right-0 z-40">
        HOME
      </h6>
    </Link>
  );
};

export default Header;
