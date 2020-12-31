import { createStore } from 'redux';
import statisticsReducer from './statistics/statisticsReducer';

const store = createStore(statisticsReducer);

export default store;
