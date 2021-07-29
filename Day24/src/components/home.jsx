import React, { useContext } from 'react';
import { LoginContext } from './loginContext';

function Home() {
  const { login, setLogin } = useContext(LoginContext);

  return (
    <div>
      <h1>Home</h1>
      <p>To view profile and dashboard you need to login</p>
      <button
        onClick={() => {
          login === false ? setLogin(true) : setLogin(false);
        }}
      >
        {login === false ? 'login' : 'logout'}
      </button>
    </div>
  );
}

export default Home;
