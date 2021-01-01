import { React } from 'react';
import Header from './Header';
import Chart from '../containers/Chart';
import MeetingTypeFilter from '../containers/MeetingTypeFilter';

const App = () => (
  <div>
    <Header />
    <MeetingTypeFilter />
    <Chart />
  </div>
);

export default App;
