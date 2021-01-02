import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import meetingTypeFilter from '../redux/filter/meetingTypeFilterActions';

const MeetingTypeFilter = ({ meetingTypeFilter }) => {
  const allMeetingTypes = ['numberOfTypeA', 'numberOfTypeB', 'numberOfTypeC'];
  const [meetingTypes, setMeetingTypes] = useState([
    'numberOfTypeA',
    'numberOfTypeB',
    'numberOfTypeC'
  ]);

  return (
    <div>
      {allMeetingTypes.map((meetingType) => (
        <Button
          key={meetingType}
          meetingType={meetingType}
          meetingTypes={meetingTypes}
          setMeetingTypes={setMeetingTypes}
          meetingTypeFilter={meetingTypeFilter}
        />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  meetingTypeFilter: (meetingTypes) => dispatch(meetingTypeFilter(meetingTypes))
});

MeetingTypeFilter.propTypes = {
  meetingTypeFilter: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MeetingTypeFilter);
