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

const Chart = ({ statistics }) => (
  <div>
    <Line
      data={() => formatChartData(statistics)}
      width={400}
      height={600}
      options={options}
    />
  </div>
);

Chart.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  statistics: state
});

export default connect(mapStateToProps, null)(Chart);
