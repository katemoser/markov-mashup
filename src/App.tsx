import { useState } from 'react';

import './App.css';
import MashupPage from './MashupPage';
import { Button, Typography } from '@mui/material';

/** Landing page
 *
 * TODO: Consider changing to routing, though may not be needed here
 */
function App() {
  const [hasStarted, setHasStarted] = useState(false);

  function restart() {
    setHasStarted(false);
  }

  return (
    <div className='App'>

      <Typography variant="h2" >MARKOV MASHUP</Typography>
      <div style={{
        position: "relative",
        marginTop: "10%"
      }}>

        {hasStarted
          ?
          <MashupPage restart={restart} />
          :
          <Button
            variant="contained"
            onClick={() => setHasStarted(true)}> START </Button>
        }
      </div>
    </div>
  );
}

export default App;
