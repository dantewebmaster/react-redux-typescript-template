import { call, put } from 'redux-saga/effects';
import api from '../../../services/users';

import { loadSuccess, loadFailure } from './actions';

export function* loadUsers() {
  try {
    const response = yield call(api.get, '?results=30&nat=br,us');

    yield put(loadSuccess(response.data.results));
  } catch (error) {
    yield put(loadFailure(error.message));
  }
}
