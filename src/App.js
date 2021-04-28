import React,{useState} from 'react'
import './App.css';
// Import Components...
import Nav from './components/Nav';
import Video from './components/Video';


function App() {
  // Write your Javascript between the function declaration and the return...
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  const toggleText = () => {
    setToggle(prev => !prev);
  }

  return (
    <div className="App">
      <div className="home">
        <h1 className={toggle ? `active` : ""}>Hello React World</h1>
        <Nav toggle={toggle} />
        <h2>Counter {counter}</h2>
        <button onClick={incrementer}>Click Me</button>
        <button onClick={toggleText}>Toggle Header Text</button>
        <Video num={counter} setToggle={setToggle} />
      </div>
    </div>
  )
}

export default App;
