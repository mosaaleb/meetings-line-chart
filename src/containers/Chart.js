import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import formatChartData from '../utils/formatChartData';
import styles from '../styles/Chart.module.scss';

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
      scaleLabel: {
        display: true,
        fontFamily: "'Fira Sans', sans-serif",
        labelString: '# of Weekly Meetings',
        fontColor: '#b43f4d',
        fontSize: 20
      },
      ticks: {
        beginAtZero: true,
        fontColor: '#b43f4d',
        fontFamily: "'Fira Sans', sans-serif",
        fontSize: 20
      },
      gridLines: {
        zeroLineColor: '#b43f4d',
        zeroLineWidth: 7,
        lineWidth: 1,
        color: 'rgba(180, 63, 77, .4)'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        fontFamily: "'Fira Sans', sans-serif",
        labelString: 'Mondays',
        fontColor: '#b43f4d',
        fontSize: 20
      },
      ticks: {
        fontColor: '#b43f4d',
        fontFamily: "'Fira Sans', sans-serif",
        fontSize: 20
      },
      gridLines: {
        zeroLineColor: '#b43f4d',
        zeroLineWidth: 7,
        lineWidth: 1,
        color: 'rgba(180, 63, 77, .4)'
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
      const object = { weekStart: item.weekStart };
      filterOptions.forEach((option) => { object[option] = item[option]; });
      return object;
    })
  );

  const filteredStatistics = applyFilter(statistics, filter);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Line
          data={() => formatChartData(filteredStatistics)}
          width={400}
          height={600}
          options={options}
        />
      </div>
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
