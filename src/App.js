import React from 'react'
import './App.css';
// Import Components...
import Nav from './components/Nav';
import Timeline from './components/Timeline';


function App() {
  // Write your Javascript between the function declaration and the return...
  const name = 'Andrew Townsley';
  const job = "web dev" ;
  return (
    <div className="App">
      <div className="home">
        <Nav/>
        <Timeline me={name} job={job}/> 
      </div>
    </div>
  )
}

export default App;
