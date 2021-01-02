import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import {
  meetingTypeSelect, meetingTypeDeselect
} from '../redux/filter/meetingTypeFilterActions';
import styles from '../styles/MeetingTypeFilter.module.scss';

const MeetingTypeFilter = ({ meetingTypeSelect, meetingTypeDeselect }) => {
  const meetingTypes = ['numberOfTypeA', 'numberOfTypeB', 'numberOfTypeC'];

  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.filterButtons}`}>
        {meetingTypes.map((meetingType) => (
          <Button
            key={meetingType}
            meetingType={meetingType}
            meetingTypeSelect={meetingTypeSelect}
            meetingTypeDeselect={meetingTypeDeselect}
          />
        ))}
      </div>
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
