import React, { useState, useEffect } from 'react';

import Ambiance from '../img/nocheBuena.png';
export default function Component({ name }) {


  return (
    <>
      <div className='name-holder'>
        <h3>{ name }</h3>
      </div>
    </>
  )
}