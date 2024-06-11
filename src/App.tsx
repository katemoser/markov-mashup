import { useState } from 'react';

import './App.css';
import MashupPage from './MashupPage';

/** Landing page
 *
 * TODO: Consider changing to routing, though may not be needed here
 */
function App() {
  const [hasStarted, setHasStarted] = useState(false);

  function restart(){
    setHasStarted(false);
  }

  return (
    <div className='App'>

      <h1> MARKOV MASHUP</h1>

      {hasStarted
        ?
        <MashupPage restart={restart} />
        :
        <button onClick={() => setHasStarted(true)}> START </button>
      }
    </div>
  );
}

export default App;
