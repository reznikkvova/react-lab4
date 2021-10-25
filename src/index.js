import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createBrowserHistory} from 'history'
import {Router} from "react-router";

const history = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
