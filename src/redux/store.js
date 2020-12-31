import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import statisticsReducer from './statistics/statisticsReducer';

const store = createStore(statisticsReducer, composeWithDevTools());

export default store;
