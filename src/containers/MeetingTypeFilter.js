import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import {
  meetingTypeSelect, meetingTypeDeselect
} from '../redux/filter/meetingTypeFilterActions';

const MeetingTypeFilter = ({ meetingTypeSelect, meetingTypeDeselect }) => {
  const meetingTypes = ['numberOfTypeA', 'numberOfTypeB', 'numberOfTypeC'];

  return (
    <div>
      {meetingTypes.map((meetingType) => (
        <Button
          key={meetingType}
          meetingType={meetingType}
          meetingTypeSelect={meetingTypeSelect}
          meetingTypeDeselect={meetingTypeDeselect}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  meetingTypeSelect: (meetingType) => (
    dispatch(meetingTypeSelect(meetingType))
  ),
  meetingTypeDeselect: (meetingType) => (
    dispatch(meetingTypeDeselect(meetingType))
  )
});

MeetingTypeFilter.propTypes = {
  meetingTypeSelect: PropTypes.func.isRequired,
  meetingTypeDeselect: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MeetingTypeFilter);
