import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './Test.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}
        {/* Route for after you select "Square Up" on someone */}
        {/* <Route path="/squareup" component={SquareUp} /> */}
      </Routes>
    </Router>
  );
};

export default App;
