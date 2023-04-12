import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedCar] = useState('-');
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().substring(0, 10));

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(e.target.value);
  };


  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(response => {
        const user = response.data.results[0];
        setFirstName(user.name.first);
        setLastName(user.name.last);
        setEmail(user.email);
      })
      .catch(error => console.log(error));
  }, []);



  return (
    <div className="App">
      <header className="App-header">
       
      <form>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={handleFirstName} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={handleLastName} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmail} />
      </label>
      <br />
      <label>
        Choose a Car:
        <select value={selectedOption} onChange={handleCar}>
          <option value="-">-Choose a Car-</option>
          <option value="Golf">Golf</option>
          <option value="Atreon">Atreon</option>
          <option value="Tiguan">Tiguan</option>
        </select>
      </label>
      <br />
      <label>
        Current Date:
        <input type="text" value={currentDate} readOnly />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>


      </header>
    </div>
  );
}

export default App;
