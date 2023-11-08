import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './routes/Login.jsx';
import Signup from './routes/Signup.jsx';
import HomePage from './routes/HomePage.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        {<Route path="/home" element={<HomePage />} />}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
