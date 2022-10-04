import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MemberRouter from '../../router/MemberRouter';

const MemberHome = () => (
  <div>
    <Routes>
      {MemberRouter.map((value) => (
        <Route path={value.url} element={value.component} key={value.url} />
      ))}
    </Routes>
  </div>
);

export default MemberHome;
