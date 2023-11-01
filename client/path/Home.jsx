import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Component from '../components/Component.jsx';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='home'>
      <h1>Home Page</h1>
      <Component/>
    </div>
  )
}