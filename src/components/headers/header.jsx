import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

const Header = ()=> {
  return (
    <header className='title_container'>
      <h1 className='title'>Todo List</h1>
      <button className='title__btn'>
        <FontAwesomeIcon icon="trash" />
      </button>
    </header>
  );
}

export default Header;