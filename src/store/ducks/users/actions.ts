import { action } from 'typesafe-actions';
import { UsersTypes, User } from './types';

export const loadRequest = () => action(UsersTypes.LOAD_REQUEST);

export const loadSuccess = (data: User[]) => action(
  UsersTypes.LOAD_SUCCESS,
  { data },
);

export const loadFailure = (error: Error) => action(
  UsersTypes.LOAD_FAILURE,
  { error },
);

export const resetStore = (payload: string[]) => action(
  UsersTypes.RESET_STORE,
  payload,
);
