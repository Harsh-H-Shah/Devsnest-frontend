import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { LoginContext } from './loginContext';

function Profile() {
  const { login, setLogin } = useContext(LoginContext);

  return (
    <div>
      <h1>Profile</h1>
      {login === true ? <p>this is a private profile</p> : <Redirect to="/" />}
    </div>
  );
}

export default Profile;
