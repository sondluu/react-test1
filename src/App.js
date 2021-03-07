import logo from './logo.svg';
import './App.css';


function SecretComponent(){
  return <h1>Secret information</h1>
}


function RegularComponent(){
  return <h1>Everyone can see this information</h1>
}

function App(props) {
  if(props.authorized) {
    return <SecretComponent />;
  }else {
    return <RegularComponent />;
  }
  }

export default App;
