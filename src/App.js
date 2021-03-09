import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


//https://api.github.com/users/sondluu

function App({ login }) { 
  const [data, setData] = useState(null); //sending initial state of null due to no data upon app loading

  //next useEffect takes in a callback function
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)  //re-structuring the link to include a way to log in 
      .then((response) => response.json())
      .then(setData);
  }, []); //passing in an empty array b/c we ony want to fetch data when the component renders

  if (data) {
    return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div> //stringify the data.
    );
  }

  return ( //the div below is for parsing data coming back from api
    <div>No user data available </div>
  );
}

export default App;
