import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/squareup" component={SquareUp} />
          {/* Route for after you select "Square Up" on someone */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
