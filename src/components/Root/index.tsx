import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Pages
import UsersPage from '../../pages/UsersPage';
import RepositoriesPage from '../../pages/RepositoriesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import HomePage from '../../pages/HomePage';

interface Props {
  store: any;
}

// const Root: React.FC<Props> = ({ store }) => (
const Root = ({ store } : Props) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/repositories" component={RepositoriesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
