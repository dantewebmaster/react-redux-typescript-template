import { call, put } from 'redux-saga/effects';
import { getRepositories } from '../../../services/github.service';
import { loadSuccess, loadFailure } from './actions';

export function* loadRepositories() {
  try {
    const response = yield call(getRepositories);

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure(error.response.data.message));
  }
}
