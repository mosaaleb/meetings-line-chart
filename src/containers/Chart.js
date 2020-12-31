import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Chart = ({ statistics }) => (
  <div>
    <pre>
      {JSON.stringify(statistics, null, '\n')}
    </pre>
  </div>
);

Chart.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  statistics: state
});

export default connect(mapStateToProps, null)(Chart);
