import MEETING_TYPE_FILTER from './meetingTypeFilterTypes';

const meetingTypeFilterReducer = (state = 'SHOW_ALL', action) => {
  switch (action) {
    case MEETING_TYPE_FILTER: return action.payload;
    default:
      return state;
  }
};

export default meetingTypeFilterReducer;
