import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";




function App() { 
  const [checked, setChecked] = useState(false);


  function toggle() {
    setChecked(checked => !checked);
  }



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
