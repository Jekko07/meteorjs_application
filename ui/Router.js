import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
