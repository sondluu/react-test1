import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";


//https://api.github.com/users/sondluu

function App({ login }) { 
  const [data, setData] = useState(null); //sending initial state of null due to no data upon app loading
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  //next useEffect takes in a callback function
  useEffect(() => {
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)  //re-structuring the link to include a way to log in 
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]); //passing in an empty array b/c we ony want to fetch data when the component renders

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <prep>{JSON.stringify(error, null, 2)}</prep>; //the number 2 here is to format the json file so we can read it
  if (!data) return null;
    return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div> //stringify the data.
    );
}

export default App;
