import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './path/Home.jsx';




const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
      </Routes>
    </>
  )
}

export default App;