import * as React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';

function Home() {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <header id="header">
        <h1>Life Pathways</h1>
      </header>
      <div>
        <img></img>
      </div>
      <div>
        <form>
          <label for="firstName">First Name</label>
          <input type="text" id="firstName"></input>
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName"></input>
          <label for="date">Schedule an Appointment</label>
          <Calendar onChange={setDate} />
        </form>
      </div>
    </div>
  );
}

export default Home;
