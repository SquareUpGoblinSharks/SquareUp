import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import HomePage from './components/homepage/HomePage.jsx';


const App = () => {
  return (
    <Router>
      <Routes>

        {<Route path="/" element={<HomePage />} />}
        {/* {<Route path="/login" component={Login} />}
        {<Route path="/signup" component={Signup} />} */}

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}

        {/* Route for after you select "Square Up" on someone */}
        {/* <Route path="/squareup" component={SquareUp} /> */}
      </Routes>
    </Router>
  );
};

export default App;
