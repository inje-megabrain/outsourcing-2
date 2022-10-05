import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Router from './router/Router';

const App = () => (
  <BrowserRouter>
    <div className="flex place-content-center items-center h-full w-full bg-[#F5F6F9]">
      <Routes>
        {Router.map((value) => (
          <Route path={value.url} element={value.component} key={value.url} />
        ))}
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
