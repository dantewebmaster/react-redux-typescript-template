import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { AppState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

interface StateProps {
  repositories: Repository[];
  loading: boolean;
  error: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories, loading, error } = this.props;
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>Deu pau...</p>}
        {repositories.length > 0 && (
          <>
            <h2>Repositories</h2>
            <ul>
              {repositories.map(r => <li key={r.id}>{r.name}</li>) }
            </ul>
          </>
        )}
      </>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    repositories: state.repositories.data,
    loading: state.repositories.loading,
    error: state.repositories.error,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(RepositoriesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);