import {
 createStore, applyMiddleware, Store, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { UsersState } from './ducks/users/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface AppState {
  repositories: RepositoriesState,
  users: UsersState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    /* eslint-disable */
    (window as any)
      .__REDUX_DEVTOOLS_EXTENSION__ && (window as any)
      .__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
