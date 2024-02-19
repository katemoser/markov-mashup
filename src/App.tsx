import { useState } from 'react';

import './App.css';
import MashupPage from './MashupPage';

function App() {
  const [hasStarted, setHasStarted] = useState(false);



  return (
    <div className='App'>

      <h1> MARKOV MASHUP</h1>

      {hasStarted
        ?
        <MashupPage />
        :
        <button onClick={() => setHasStarted(true)}> START </button>
      }
    </div>
  );
}

export default App;
