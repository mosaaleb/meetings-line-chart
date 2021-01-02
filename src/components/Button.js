import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Button.module.scss';

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

  const selectedClass = isSelected ? styles.selectedButton : styles.deSelectedButton;

  return (
    <button
      type="button"
      onClick={applyFilter}
      className={`${styles.button} ${selectedClass}`}
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
