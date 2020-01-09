import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Repository[]) => action(
  RepositoriesTypes.LOAD_SUCCESS,
  { data },
);

export const loadFailure = (error: Error) => action(
  RepositoriesTypes.LOAD_FAILURE,
  { error },
);

export const resetStore = (payload: string[]) => action(
  RepositoriesTypes.RESET_STORE,
  payload,
);
