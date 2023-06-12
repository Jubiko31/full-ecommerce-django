import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const reducer = combineReducers({});
const initialState = {};
const middleware = [thunk];

const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export default store;