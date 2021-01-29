import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './todos.css';

const Todos = ()=> (
  <ul className="list">
    <li className="item">
      <i className='list_icon'>
        <FontAwesomeIcon icon="circle-notch" />
      </i>
      <span className='todo'>Something</span>
    </li>
  </ul>
);

export default Todos;