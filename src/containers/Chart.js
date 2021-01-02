import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import formatChartData from '../utils/formatChartData';

const options = {
  legend: {
    display: false
  },
  grid: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  hover: {
    animationDuration: 300
  },
  layout: {
    padding: 30
  }
};

const Chart = ({ filter, statistics }) => {
  const applyFilter = (array, filterOptions) => (
    array.map((item) => {
      const object = { meetingDay: item.meetingDay };
      filterOptions.forEach((option) => { object[option] = item[option]; });
      return object;
    })
  );

  const filteredStatistics = applyFilter(statistics, filter);

  return (
    <div>
      <pre>
        {JSON.stringify(filter, null, '\n')}
      </pre>
      <Line
        data={() => formatChartData(filteredStatistics)}
        width={400}
        height={600}
        options={options}
      />
    </div>
  );
};

Chart.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  filter: state.meetingTypeFilter,
  statistics: state.statistics
});

export default connect(mapStateToProps)(Chart);
