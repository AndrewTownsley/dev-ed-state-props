import React from 'react'
import './App.css';
// Import Components...
// import Nav from './components/Nav';
// import Timeline from './components/Timeline';


function App() {
  // Write your Javascript between the function declaration and the return...
  let counter = 0;

  const incrementer = () => {
    counter += 1;
  }
  return (
    <div className="App">
      <div className="home">
        <h1>Hello React World</h1>
        <h2>Counter {counter}</h2>
      </div>
    </div>
  )
}

export default App;
