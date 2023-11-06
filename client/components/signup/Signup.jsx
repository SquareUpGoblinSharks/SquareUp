import React from 'react';
import { useDispatch } from 'react-redux';

const onSignupHandler = async (event) => {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  const age = event.target.elements.age.value;
  const height = event.target.elements.height.value;
  const weight = event.target.elements.weight.value;
  const fightingStyle = event.target.elements.fightingStyle.value;
  const location = event.target.elements.location.value;
  console.log(event.target.elements.profilePicture.files[0]);
  const profilePicture = event.target.elements.profilePicture.files[0];
  const formData = new FormData();
  formData.append('profilePicture', profilePicture);

  try {
    const response = await fetch('')
  } catch (error) {

  }

  // const profilePicture = URL.createObjectURL(
  //   new Blob([event.target.elements.profilePicture.files[0]], {
  //     type: 'image/png',
  //   })
  // );
  console.log(profilePicture);
};

const Signup = () => {
  return (
    <div className="sign-container">
      <form className="signForm" onSubmit={onSignupHandler}>
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
        <div className="form-group">
          <label htmlFor="profilePicture" className="form-label">
            Profile Picture:
          </label>
          <input
            id="profilePicture"
            name="profilePicture"
            type="file"
            accept="image/gif, image/jpeg, image/png"
            className="form-input"
          />
        </div>
        <input type="submit" value="Create User" className="submit-btn" />
      </form>
    </div>
  );
};

export default Signup;
