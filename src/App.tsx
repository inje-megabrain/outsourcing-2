import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

const App = () => (
  <BrowserRouter>
    <div className="flex place-content-center items-center h-full w-full bg-[#F5F6F9]">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
    <h6 className="text-center p-8">
      Copyright 2022. SimG. Co., Ltd. all rights reserved.
    </h6>
  </BrowserRouter>
);

export default App;
