import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import './styles/styles.scss';
import Store from './middleware/store';
import IntlProvider from './intlprovider';
import Root from './root';
import Index from './views/index';

// app route definitions
const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Index} />
  </Route>
);


// render app
ReactDOM.render(
  <Provider store={Store}>
    <IntlProvider>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById('root'),
);
