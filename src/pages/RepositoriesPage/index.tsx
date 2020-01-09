import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../store';
import { RepositoriesProps } from '../../models/repositories.interface';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryList from '../../components/RepositoryList';

class RepositoriesPage extends Component<RepositoriesProps> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  componentWillUnmount() {
    const { resetStore } = this.props;

    resetStore();
  }

  render() {
    const {
      repositories, loading, error, history,
    }: RepositoriesProps = this.props;
    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {repositories.length > 0 && (
          <>
            <h2>Repositories</h2>
            <RepositoryList data={repositories} />
            <button type="button" onClick={() => history.goBack()}>Go Back</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesPage);
