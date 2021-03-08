import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";




function App() { //de-structuring object to give it a name "engagement"
  const [engagement, setEngagement] = useState("High"); //useState function returns an array of 2 items: 1st item is state, 2nd item is a function that updates the state.
  //above, engagement is the 1st item which is the state, and the 2nd "setEngagement" is a function to change state
  
  const [surveycompletion, setSurveyComplete] = useState("Completed");
  
  useEffect(() => {
    console.log(`Engagement is ${engagement}`); //could be use as a side effect here, doesn't have to be for rendering
  }, [engagement]);

  useEffect(() => {
    console.log(`survey ${surveycompletion}`);
  }, [surveycompletion]);

  return (
    <>
    <h1>Engagement Level is: {engagement} and {surveycompletion}</h1>
    <button onClick={() => setEngagement("Low")}>Low</button>
    <button onClick={() => setEngagement("High")}>High</button>
    <button onClick={() => setSurveyComplete("Completed")}>Completed</button>
    <button onClick={() => setSurveyComplete("Uncompleted")}>Uncompleted</button>
    </>
  );
}

export default App;
