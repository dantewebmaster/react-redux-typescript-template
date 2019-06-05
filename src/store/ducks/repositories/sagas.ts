import { call, put } from 'redux-saga/effects';
import api from '../../../services/github.service';

import { loadSuccess, loadFailure } from './actions';

export function* loadRepositories() {
  try {
    const response = yield call(api.get, 'users/dantewebmaster/repos');

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
