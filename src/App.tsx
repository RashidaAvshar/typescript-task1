import React from 'react';
import Card from './components/Card';
import Heading from './components/Heading';
import Person from './components/Person';

function App() {
  const person = {
    firstName: "farid",
    lastName: "yusif",
    age: 18
  }
  return (
    <div className="App">
      
      <Card title="kitab"  price={15} isLogged = {false} />
      <Heading>{45}</Heading>
      <Person name= {person}/>

    </div>
  );
}

export default App;
