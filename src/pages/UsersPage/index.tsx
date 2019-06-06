import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../store';
import { Props } from '../../models/users.interface';
import * as UsersActions from '../../store/ducks/users/actions';
import UserList from '../../components/UserList';

class UsersPage extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  componentWillUnmount() {
    const { resetStore } = this.props;

    resetStore(['data', 'error']);
  }

  render() {
    const {
      users, loading, error, history,
    }: Props = this.props;
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {users.length > 0 && (
          <>
            <h2>Users</h2>
            <UserList data={users} />
            <button type="button" onClick={() => history.goBack()}>Go Back</button>
          </>
        )}
      </>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    users: state.users.data,
    loading: state.users.loading,
    error: state.users.error,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(UsersActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
