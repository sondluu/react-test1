import logo from './logo.svg';
import './App.css';


function Header(props) { //a component is a function that returns UI
  console.log(props);
  return (
    <header>
      <h1>{props.name} Digital Health Dashboard</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Patient {props.activity} Mobile Tracker</p>
      <img 
      src={logo} 
      height={200} 
      alt="blue icon"
      />
      <ul style={{ textAlign: "left" }}>
        {props.features.map((category) => (
          <li key={category.id}>{category.title}</li>
        ))}
      </ul>
    </section>
  )
}


function Footer(props) {
  return (
    <section>
      <p>last update {props.date}</p>
    </section>
  )
}


const features = [
  "physical activities",
  "digital learning",
  "social communication",
  "weigh-ins"
]

//building objects before passing data to the component as a property
const categoryObjects = features.map((category, i) => ({id: i, title: category}));
console.log(categoryObjects);


function App() {
  return (
    <div className="App">
      <Header name="John D."/>
      <Main activity="Physical Activity" features={categoryObjects}/>
      <Footer date={new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
