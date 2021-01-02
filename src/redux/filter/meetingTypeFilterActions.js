import MEETING_TYPE_FILTER from './meetingTypeFilterTypes';

const meetingTypeFilter = (meetingTypes) => ({
  type: MEETING_TYPE_FILTER,
  payload: meetingTypes
});

export default meetingTypeFilter;
