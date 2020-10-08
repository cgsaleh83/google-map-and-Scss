import React from 'react';
import { useState } from 'react';
import './App.scss';
import Direction from './Components/Map/Direction';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('')
  return (
    <div className="App">
      <div className="App-header">
        <h3>HEY THIS IS MAP AND SCSS COMPONENT</h3>
        <input type="text" onBlur={e => setOrigin(e.target.value)} placeholder="Starting From" />
        <input type="text" onBlur={e => setDestination(e.target.value)} placeholder="Going To" />
        <Direction origin={origin} destination={destination}></Direction>
      </div>
    </div>
  );
}

export default App;
