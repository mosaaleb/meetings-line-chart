import {
  MEETING_TYPE_SELECT,
  MEETING_TYPE_DESELECT
} from './meetingTypeFilterTypes';

export const meetingTypeSelect = (meetingType) => ({
  type: MEETING_TYPE_SELECT,
  payload: meetingType
});

export const meetingTypeDeselect = (meetingType) => ({
  type: MEETING_TYPE_DESELECT,
  payload: meetingType
});
