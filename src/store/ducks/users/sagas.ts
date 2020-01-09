import { call, put } from 'redux-saga/effects';
import { getUsers } from '../../../services/users.service';
import { loadSuccess, loadFailure } from './actions';

export function* loadUsers() {
  try {
    const response = yield call(getUsers);

    yield put(loadSuccess(response.data.results));
  } catch (error) {
    yield put(loadFailure(error.response.data));
  }
}
