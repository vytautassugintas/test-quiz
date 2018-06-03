import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import store from './store';
import Routes from './containers/Routes';
import 'bulma/css/bulma.css'
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
