import { combineReducers } from 'redux';
import statisticsReducer from './statistics/statisticsReducer';
import meetingTypeFilterReducer from './filter/meetingTypeFilterReducer';

const rootReducer = combineReducers({
  statistics: statisticsReducer,
  meetingTypeFilter: meetingTypeFilterReducer
});

export default rootReducer;
