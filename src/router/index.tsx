import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Users from '../pages/Users'
import About from '../pages/About'

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Users />} />

    <Route path="/dashboard" element={<About />} />
  </Routes>
);

export default Router;