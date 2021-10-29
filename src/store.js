import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  rootReducer  from './rootreducer';
import Sagas from './Sagas';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(Sagas);

export default store;