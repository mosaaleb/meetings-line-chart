import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  meetingType, meetingTypes, setMeetingTypes, meetingTypeFilter
}) => {
  const handleChangeFilter = () => {
    if (meetingTypes.includes(meetingType)) {
      setMeetingTypes(meetingTypes.filter((type) => type !== meetingType));
    } else {
      setMeetingTypes([...meetingTypes, meetingType]);
    }
    meetingTypeFilter(meetingTypes);
  };

  return (
    <button type="button" onClick={handleChangeFilter}>
      {meetingType}
    </button>
  );
};

Button.propTypes = {
  meetingType: PropTypes.string.isRequired,
  setMeetingTypes: PropTypes.func.isRequired,
  meetingTypeFilter: PropTypes.func.isRequired,
  meetingTypes: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Button;
