import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import * as serviceWorker from './serviceWorker';

// Page components
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Users from './pages/Users';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/repositories" component={Repositories} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'),
);

serviceWorker.unregister();
