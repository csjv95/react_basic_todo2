import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash,faCircleNotch,faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import App from './app';

library.add(fab,faTrash,faCircleNotch,faCheckSquare);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

