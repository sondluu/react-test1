import logo from './logo.svg';
import './App.css';
import React, { useReducer } from "react";




function App() { 
  const [checked, toggle] = useReducer( //pass the function toggle which is the update function inside the [] 
    (checked) => !checked, //useReducer takes in 2 arguments, the first if the reducer function
    false //second arguent is the original state
  );


//a reducer function's definition is it takes in the current state ad returns
//a new state. In this partcular case, if "checked" is false then returns the opposit which is true


  return (
    <>
      <input  type="checkbox" 
              value={checked} 
              onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
