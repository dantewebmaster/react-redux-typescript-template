/**
 * Action Types
 */
export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

/**
 * Data Types
 */
export interface User {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
  email: string;
}

/**
 * State Types
 */
export interface UsersState {
  readonly data: User[];
  readonly loading: boolean;
  readonly error: string;
}
