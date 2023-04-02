import React from 'react';
import Card from './components/Card';
import Heading from './components/Heading';
import LoginPage from './components/LoginPage';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const person = {
    firstName: "farid",
    lastName: "yusif",
    age: 18,
    address: {
      home: 16,
      street: "abbas sehhet",
    },
  };

  const personList = [
    {
    firstName: "farid",
    lastName: "yusif",
    age: 18
  },
  {
    firstName: "murad",
    lastName: "suleyman",
    age: 18
  },
  {
    firstName: "sinan",
    lastName: "yuksel",
    age: 18
  },
  {
    firstName: "farida",
    lastName: "yusif",
    age: 18
  },

]

  return (
    <div className="App">
      
      <Card title="kitab"  price={15} isLogged = {false} />
      <Heading>{45}</Heading>
      <Person name={person} />
      <PersonList fullName={personList}/>
      <LoginPage status="login"/>

    </div>
  );
}

export default App;
