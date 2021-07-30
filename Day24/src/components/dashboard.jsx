import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { LoginContext } from './loginContext';

function Dashboard() {
  const { login, setLogin } = useContext(LoginContext);
  return (
    <div>
      <h1>Dashboard : private route</h1>
      {login === true ? <p>this is a private profile</p> : <Redirect to="/" />}
    </div>
  );
}

export default Dashboard;
