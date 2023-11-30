import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Component from '../components/Component.jsx';

// import asdf from '../img/'

import image from '../img/room-background.png';

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className='home'>
      <h1>Home Page</h1>
      <Component/>
      <img src={image} alt='nothing'></img>
      <div className='gif'></div>
    </div>
  )
}