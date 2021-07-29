import React from 'react';

function Home({login, setLogin}) {

  console.log(login);

  return <div>
    <h1>Home</h1>
    <p>To view profile and dashboard you need to login</p>
    <button onClick={()=>{
      login === "login"? setLogin("logout") : setLogin("login");
    }}>{login}</button>
  </div>;
}

export default Home;