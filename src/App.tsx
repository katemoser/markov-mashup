import { useState } from 'react';

import './App.css';
import MashupPage from './MashupPage';


import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';
import { Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: red[500],
    },
  },
});

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
        <Button variant="contained"onClick={() => setHasStarted(true)}> START </Button>
      }
    </div>
  );
}

export default App;
