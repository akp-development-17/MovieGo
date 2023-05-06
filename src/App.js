import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';
import BookingSummary from './components/BookingSummary';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShowList} />
        <Route path="/show/:showId" component={ShowDetails} />
        <Route exact path="/booking-summary" component={BookingSummary} />
      </Switch>
    </Router>
  );
};

export default App;
