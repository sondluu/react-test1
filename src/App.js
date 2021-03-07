import logo from './logo.svg';
import './App.css';


function SecretComponent(){
  return <h1>Secret information</h1>
}


function RegularComponent(){
  return <h1>Everyone can see this information</h1>
}

function App({authorized}) {
  return (
    <>
    {authorized ? (<SecretComponent />) : (<RegularComponent />)}
    </>
  );
}

export default App;
