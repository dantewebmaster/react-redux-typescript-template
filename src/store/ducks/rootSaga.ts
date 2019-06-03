import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { UsersTypes } from './users/types';
import { loadRepositories } from './repositories/sagas';
import { loadUsers } from './users/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, loadRepositories),
    takeLatest(UsersTypes.LOAD_REQUEST, loadUsers),
  ]);
}
