import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from "@auth0/auth0-react";
import Main from './pages/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Router>
          <Main/>
      </Router>
  </Auth0Provider>,
  document.getElementById('root')
);