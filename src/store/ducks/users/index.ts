import { Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';

const INITIAL_STATE: UsersState = {
  data: [],
  loading: false,
  error: '',
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case UsersTypes.LOAD_REQUEST:
      return {
        ...state, loading: true,
      };
    case UsersTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, data: payload.data,
      };
    case UsersTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: payload.error, data: INITIAL_STATE.data,
      };
    case UsersTypes.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
