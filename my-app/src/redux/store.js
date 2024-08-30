import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './reducer';

const store = configureStore({ reducer: cakeReducer });

export default store;


