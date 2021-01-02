import MEETING_TYPE_FILTER from './meetingTypeFilterTypes';

const initialState = [
  'numberOfTypeA',
  'numberOfTypeB',
  'numberOfTypeC'
];

const meetingTypeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEETING_TYPE_FILTER: return action.payload;
    default:
      return state;
  }
};

export default meetingTypeFilterReducer;
