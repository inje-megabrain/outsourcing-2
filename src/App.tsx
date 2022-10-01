import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';

const App = () => (
  <BrowserRouter>
    <Route path="/" element={<Main />} />
  </BrowserRouter>
);

export default App;
