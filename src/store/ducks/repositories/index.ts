import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  loading: false,
  error: '',
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return {
        ...state, loading: true,
      };
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, data: payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: payload.error, data: INITIAL_STATE.data,
      };
    case RepositoriesTypes.RESET_STORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
