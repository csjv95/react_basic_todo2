import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './input.css';

const Input = () => (
  <form className='input_container'>
    <input className='input' type="text" placeholder='Something'/>
    <button className='input_-btn'>
      <FontAwesomeIcon icon="check-square" />
    </button>
  </form>
);

export default Input;