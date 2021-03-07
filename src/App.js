import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";



function App() { //de-structuring object to give it a name "engagement"
  const [engagement, setEngagement] = useState("High"); //useState function returns an array of 2 items: 1st item is state, 2nd item is a function that updates the state.
  console.log(engagement); //above, engagement is the 1st item which is the state, and the 2nd "setEngagement" is a function to change state
  return (
    <>
    <h1>Engagement Level is: {engagement}</h1>
    <button onClick={() => setEngagement("Low")}>Low</button>
    <button onClick={() => setEngagement("High")}>High</button>
    </>
  );
}

export default App;
