import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './path/Home.jsx';




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </div>
  )
}

export default App;