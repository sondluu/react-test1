import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";




function App() { 
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
