import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
const sagamiddle=createSagaMiddleware();
const middlewares=[sagamiddle,logger];

export const Store = createStore(rootReducer,applyMiddleware(...middlewares));
sagamiddle.run(rootSaga);
export const persistor = persistStore(Store);

//export default {Store,persistor};