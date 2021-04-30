import { combineReducers, createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import postReducer from './postReducer';
const reducers = combineReducers({
	postReducer,
});
const makeStore = () => createStore(reducers);
export const wrapper = createWrapper(makeStore, { debug: true });
