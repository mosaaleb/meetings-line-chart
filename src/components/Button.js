import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ meetingType, meetingTypeSelect, meetingTypeDeselect }) => {
  const [isSelected, setIsSelected] = useState(true);

  const applyFilter = () => {
    setIsSelected(!isSelected);
    if (isSelected === true) {
      meetingTypeDeselect(meetingType);
    } else {
      meetingTypeSelect(meetingType);
    }
  };

  return (
    <button
      type="button"
      onClick={applyFilter}
      style={{ textDecoration: isSelected === false && 'line-through' }}
    >
      {meetingType}
    </button>
  );
};

Button.propTypes = {
  meetingType: PropTypes.string.isRequired,
  meetingTypeSelect: PropTypes.func.isRequired,
  meetingTypeDeselect: PropTypes.func.isRequired
};

export default Button;
