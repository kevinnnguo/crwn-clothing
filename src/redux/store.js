import {  applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const midderwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...midderwares));

export default store;