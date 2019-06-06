import { call, put,  } from 'redux-saga/effects';
import api from '../../../services/users.service';
import { loadSuccess, loadFailure } from './actions';
import { SagaIterator } from '@redux-saga/core';

export function* loadUsers(): SagaIterator {
  try {
    const response = yield call(api.get, '?results=30&nat=br,us');

    yield put(loadSuccess(response.data.results));
  } catch (error) {
    yield put(loadFailure(error.message));
  }
}
