import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './routes/Login.jsx';
import Signup from './routes/Signup.jsx';
import EditProfile from './routes/EditProfile.jsx';
import HomePage from './routes/HomePage.jsx';
import Prototype from './routes/Prototype.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {<Route path="/home" element={<HomePage />} />}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/edit-profile' element={<EditProfile />}/>
        <Route path="/prototype" element={<Prototype />} />
        {<Route path="*" element={<Login />} />}
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} /> */}

        {/* Route for after you select "Square Up" on someone */}
        {/* <Route path="/squareup" component={SquareUp} /> */}
      </Routes>
    </Router>
  );
};

export default App;
