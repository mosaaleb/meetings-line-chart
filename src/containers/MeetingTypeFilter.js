import React from 'react';
import Button from '../components/Button';

const MeetingTypeFilter = () => {
  const meetingTypes = ['TypeA', 'TypeB', 'TypeC'];

  return (
    <div>
      {meetingTypes.map((meetingType) => (
        <Button name={meetingType} key={meetingType} />
      ))}
    </div>
  );
};

export default MeetingTypeFilter;
