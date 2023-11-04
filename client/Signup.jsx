import React from 'react';

const Signup = () => {
  return (
    <form method="POST" action="/signup">
      Username: <input name="username" type="text" />
      Password: <input name="password" type="password" />
      Age: <input name="age" type="number" />
      Height: <input name="height" type="number" />
      Weight: <input name="weight" type="number" />
      Fighting Style: <input name="fighting style" type="text" />
      Location: <input name="location" type="text" />
      <input type="submit" value="create user" />
    </form>
  );
};

export default Signup;
