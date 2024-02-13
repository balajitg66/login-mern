

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Home from './Home';


function App() {
  return (
    <div style={{ marginTop: '-3.5rem' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
