const xAxis = (data) => (
  data.map((entry) => entry.weekStart)
);

const getMeetingDataArray = (data, meetingType) => (
  data.map(({ numberOfMeetings }) => (
    numberOfMeetings[meetingType]
  ))
);

const yAxis = (data) => {
  const meetingTypes = Object.keys(data[0].numberOfMeetings);

  return meetingTypes.map((meetingType) => ({
    label: meetingType,
    data: getMeetingDataArray(data, meetingType)
  }));
};

const groupByWeekStart = (statistics) => (
  statistics.map(({ weekStart, ...rest }) => (
    {
      weekStart,
      numberOfMeetings: {
        ...rest
      }
    }
  ))
);

const formatChartData = (data) => {
  const groupedData = groupByWeekStart(data);

  return {
    labels: xAxis(groupedData),
    datasets: yAxis(groupedData)
  };
};

export default formatChartData;
