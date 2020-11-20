import './App.css';
import { useState } from 'react';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <div className="App">
      {!isSignedIn &&
        <button onClick={() => setIsSignedIn(true)}>
          Sign In
        </button>
      }

      {isSignedIn &&
        <button onClick={() => setIsSignedIn(false)}>
          Log Out
        </button>
      }
    </div>
  );
}

export default App;
