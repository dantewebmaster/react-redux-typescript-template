import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { AppState } from '../store';
import * as UsersActions from '../store/ducks/users/actions';
import { UsersProps } from '../models/users.interface';

class UsersContainer extends Component<UsersProps> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  componentWillUnmount() {
    const { resetStore } = this.props;

    resetStore();
  }

  render() {
    const { users, loading, error } = this.props;
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <UserList data={users} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
