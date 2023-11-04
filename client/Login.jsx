import React from 'react';

const Login = () => {
  return (
    <form method="POST" action="./login">
      <input name="username" type="text" placeholder="username" />
      <input name="password" type="password" placeholder="password" />
      <input type="submit" value="login" />
    </form>
  );
};

export default Login;
