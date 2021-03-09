import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";




function App() { 
  const [checked, setChecked] = useState(false);


  function toggle() {
    setChecked(checked => !checked); //this can be called a "reducer"
  }

//a reducer function's definition is it takes in the current state ad returns
//a new state. In this partcular case, if "checked" is false then returns the opposit which is true
 

  return (
    <>
      <input  type="checkbox" 
              value={checked} 
              onChange={(toggle)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
