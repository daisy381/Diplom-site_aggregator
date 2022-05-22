//library
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//components
import Main from './pages/Main'

//styles
import './index.css';


ReactDOM.render(
      <Router>
          <Main/>
      </Router>,
  document.getElementById('root')
);