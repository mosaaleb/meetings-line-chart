import {
  MEETING_TYPE_SELECT,
  MEETING_TYPE_DESELECT
} from './meetingTypeFilterTypes';

const initialState = [
  'numberOfTypeA',
  'numberOfTypeB',
  'numberOfTypeC'
];

const meetingTypeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEETING_TYPE_SELECT: return [
      ...state,
      action.payload
    ];

    case MEETING_TYPE_DESELECT: return (
      state.filter((item) => item !== action.payload)
    );

    default:
      return state;
  }
};

export default meetingTypeFilterReducer;
