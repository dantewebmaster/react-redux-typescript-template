import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import './styles.css';

ReactDOM.render(
  <Root store={store} />, document.getElementById('root'),
);

serviceWorker.unregister();
