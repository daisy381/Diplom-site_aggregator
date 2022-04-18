import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';



ReactDOM.render(
      <Router>
          <Main/>
      </Router>,
  document.getElementById('root')
);