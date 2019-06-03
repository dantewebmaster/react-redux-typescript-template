import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { User } from '../../store/ducks/users/types';
import { AppState } from '../../store';
import * as UsersActions from '../../store/ducks/users/actions';

interface StateProps {
  users: User[];
  loading: boolean;
  error: string;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class UserList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { users, loading, error } = this.props;
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {users.length > 0 && (
          <>
            <h2>Users</h2>
            <ul>
              {users.map(r => (
                <li key={r.id}>
                  {`${r.name.title} ${r.name.first} ${r.name.last}`}
                </li>
              ))}
            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
