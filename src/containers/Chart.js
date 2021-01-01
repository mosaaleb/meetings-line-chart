import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import formatChartData from '../utils/formatChartData';

const options = {
  legend: {
    display: false
  }
};

const Chart = ({ statistics }) => (
  <div>
    <Line
      options={options}
      data={() => formatChartData(statistics)}
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
