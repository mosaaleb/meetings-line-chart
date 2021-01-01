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
    data: getMeetingDataArray(data, meetingType),
    lineTension: 0,
    fill: false,
    borderWidth: 3,
    backgroundColor: 'rgba(20, 96, 82, 1)',
    borderColor: 'rgba(20, 96, 82, 1)',
    hoverBorderWidth: 5
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
