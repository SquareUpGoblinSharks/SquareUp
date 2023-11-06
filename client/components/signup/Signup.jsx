import React from 'react';

const Signup = () => {
  return (
    <div class='signup'>
    <div className="sign-container">
      <form method="POST" action="/signup" className="signForm">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input id="age" name="age" type="number" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="height" className="form-label">
            Height:
          </label>
          <input
            id="height"
            name="height"
            type="number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight" className="form-label">
            Weight:
          </label>
          <input
            id="weight"
            name="weight"
            type="number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fightingStyle" className="form-label">
            Fighting Style:
          </label>
          <input
            id="fightingStyle"
            name="fighting style"
            type="text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">
            Location:
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="form-input"
          />
        </div>
        <input type="submit" value="Create User" className="submit-btn" />
      </form>
    </div>
    </div>
  );
};

export default Signup;
